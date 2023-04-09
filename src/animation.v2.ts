import { BehaviorSubject, filter, forkJoin, map, of, switchMap, tap } from 'rxjs';
// @ts-ignore
import { fromPromise } from 'rxjs/src/internal/observable/innerFrom';

import {
  createLine,
  calcLineLength,
  generateTornLine,
  generateSides,
  generateFigureShape,
  calcLineAngle,
  calcPointInPolarSystem
} from './math';
import CanvasFactory from './canvas/canvas.factory';
import { Line, Point } from './types';

export default class AnimationV2 {
  private realCanvas = this.canvasFactory.createCanvas(this.width, this.height);

  private readonly leftSideImg = this.document.createElement('img');

  private readonly rightSideImg = this.document.createElement('img');

  private readonly _tick$ = new BehaviorSubject(0);

  private readonly sides = generateSides(this.width, this.height);

  private currentLine!: Line;

  public get tick$() {
    return this._tick$.asObservable();
  }

  constructor(
    private readonly canvasFactory: CanvasFactory,
    private readonly document: Document,
    private readonly width: number,
    private readonly height: number,
    private readonly offset: Point,
    private readonly lineLifeTicks = 100,
    private readonly speed = 7,
    private readonly backgroundColor = 'black',
    private readonly lineColor = 'white'
  ) {
    const root = document.querySelector('.root');

    root?.appendChild(this.realCanvas.canvas);

    this.setup();
  }

  public dispatch() {
    this._tick$.next(this._tick$.value + 1);
  }

  private setup() {
    this.realCanvas.fill(this.backgroundColor);

    // Generate and save left and right figures every this.lineLifeTicksms.
    this.tick$
      .pipe(
        filter((time) => time % this.lineLifeTicks === 0),
        map(() => {
          this.currentLine = createLine(this.sides, this.offset);
          const lineLength = calcLineLength(this.currentLine.start, this.currentLine.end);

          const line = generateTornLine(
            this.currentLine.start,
            this.currentLine.end,
            lineLength,
            parseInt(`${lineLength / 7}`, 10),
            Math.PI
          );

          return generateFigureShape(line, this.width, this.height, this.sides);
        }),
        switchMap((figure) =>
          forkJoin([this.drawPathOnTempCanvas(figure.left), this.drawPathOnTempCanvas(figure.right)])
        ),
        tap(([left, right]) => {
          this.leftSideImg.src = left;
          this.rightSideImg.src = right;
        })
      )
      .subscribe();

    // Draw and animate parts on real canvas.
    this.tick$
      .pipe(
        filter((time) => time % this.lineLifeTicks !== 0),
        map((time) => time % this.lineLifeTicks),
        map((timer) => {
          const endPointWithoutOffset = {
            x: this.currentLine.end.x - this.currentLine.start.x,
            y: this.currentLine.end.y - this.currentLine.start.y
          };
          const lineRadianAngle = calcLineAngle(endPointWithoutOffset);

          return {
            left: calcPointInPolarSystem(lineRadianAngle - Math.PI / 2, timer / this.speed),
            right: calcPointInPolarSystem(lineRadianAngle + Math.PI / 2, timer / this.speed)
          };
        }),
        switchMap(({ left, right }) =>
          forkJoin([
            this.realCanvas.reset(),
            this.realCanvas.clear(),
            fromPromise(Promise.resolve().then(() => this.realCanvas.fill(this.backgroundColor))),
            this.realCanvas.drawImage(this.leftSideImg, left),
            this.realCanvas.drawImage(this.rightSideImg, right)
          ])
        )
      )
      .subscribe();
  }

  private drawPathOnTempCanvas(path: Point[]) {
    return of(this.canvasFactory.createCanvas(this.width, this.height)).pipe(
      switchMap((canvas) =>
        forkJoin([
          canvas.drawPath(path, this.lineColor, this.backgroundColor),
          canvas.drawImage(this.realCanvas.canvas, { x: 0, y: 0 })
        ]).pipe(switchMap(() => canvas.toDataUrl()))
      )
    );
  }
}

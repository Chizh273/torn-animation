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
  calcPointInPolarSystem,
} from './math';
import CanvasFactory from './canvas/canvas.factory';
import { AnimationSettings } from './settings';
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
    private settings: AnimationSettings,
  ) {
    const root = document.querySelector('.root');

    root?.appendChild(this.realCanvas.canvas);

    this.setup();
  }

  public dispatch() {
    this._tick$.next(this._tick$.value + 1);
  }

  private setup() {
    this.realCanvas.fill(this.settings.data.backgroundColor);

    // Generate and save left and right figures every this.settings.data.lineLifeTicksms.
    this.tick$
      .pipe(
        filter((time) => time % this.settings.data.lineLifeTicks === 0),
        map(() => {
          this.currentLine = createLine(this.sides, this.offset);
          const lineLength = calcLineLength(this.currentLine.start, this.currentLine.end);

          const line = generateTornLine(
            this.currentLine.start,
            this.currentLine.end,
            lineLength,
            parseInt(`${lineLength / 7}`, 10),
            Math.PI,
          );

          return generateFigureShape(line, this.width, this.height, this.sides);
        }),
        switchMap((figure) =>
          forkJoin([this.drawPathOnTempCanvas(figure.left), this.drawPathOnTempCanvas(figure.right)]),
        ),
        tap(([left, right]) => {
          this.leftSideImg.src = left;
          this.rightSideImg.src = right;
        }),
      )
      .subscribe();

    // Draw and animate parts on real canvas.
    this.tick$
      .pipe(
        filter((time) => time % this.settings.data.lineLifeTicks !== 0),
        map((time) => time % this.settings.data.lineLifeTicks),
        map((timer) => {
          const endPointWithoutOffset = {
            x: this.currentLine.end.x - this.currentLine.start.x,
            y: this.currentLine.end.y - this.currentLine.start.y,
          };
          const lineRadianAngle = calcLineAngle(endPointWithoutOffset);
          const halfPi = Math.PI / 2;

          return {
            left: calcPointInPolarSystem(lineRadianAngle - halfPi, timer / this.settings.data.distanceCoefficient),
            right: calcPointInPolarSystem(lineRadianAngle + halfPi, timer / this.settings.data.distanceCoefficient),
          };
        }),
        switchMap(({ left, right }) =>
          forkJoin([
            this.realCanvas.clear(),
            fromPromise(Promise.resolve().then(() => this.realCanvas.fill(this.settings.data.backgroundColor))),
            this.realCanvas.drawImage(this.leftSideImg, left),
            this.realCanvas.drawImage(this.rightSideImg, right),
          ]),
        ),
      )
      .subscribe();
  }

  private drawPathOnTempCanvas(path: Point[]) {
    return of(this.canvasFactory.createCanvas(this.width, this.height)).pipe(
      switchMap((canvas) =>
        forkJoin([
          canvas.drawPath(path, this.settings.data.lineColor, this.settings.data.backgroundColor),
          canvas.drawImage(this.realCanvas.canvas, { x: 0, y: 0 }),
        ]).pipe(switchMap(() => canvas.toDataUrl())),
      ),
    );
  }
}

import { BehaviorSubject, filter, forkJoin, map, switchMap, tap } from 'rxjs';

import Canvas from './canvas/canvas';
import createLine from './math/createLine';
import calcLineLength from './math/calcLineLength';
import generateTornLine from './math/generateTornLine';
import generateSides from './math/generateSides';
import generateFigureShape from './math/generateFigureShape';
import { Line, Point } from './types';
import calcLineAngle from './math/calcLineAngle';
import calcPointInPolarSystem from './math/calcPointInPolarSystem';

export default class Animation {
  private colors = ['red', 'green', 'black'];

  private realCanvas = new Canvas(this.document.createElement('canvas'), this.width, this.height);

  private fakeCanvas = new Canvas(this.document.createElement('canvas'), this.width, this.height);

  private readonly leftSideImg = this.document.createElement('img');

  private readonly rightSideImg = this.document.createElement('img');

  private readonly _tick$ = new BehaviorSubject(0);

  private readonly sides = generateSides(this.width, this.height);

  private currentLine!: Line;

  public get tick$() {
    return this._tick$.asObservable().pipe(filter((time) => time < 2000));
  }

  constructor(
    private readonly document: Document,
    private readonly width: number,
    private readonly height: number,
    private readonly offset: Point
  ) {
    document.body.append(this.realCanvas.canvas);

    this.setup();
  }

  public dispatch() {
    this._tick$.next(this._tick$.value + 1);
  }

  private setup() {
    // Generate and save left and right figures every 300ms.
    this.tick$
      .pipe(
        filter((time) => time % 1000 === 0),
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
        switchMap((figure) => {
          return forkJoin([
            this.resetFakeCanvas(),
            this.fakeCanvas.drawFigure(figure.left),
            this.resetFakeCanvas(),
            this.fakeCanvas.drawFigure(figure.right),
            this.fakeCanvas.reset()
          ]);
        }),
        tap(([leftReset, left, rightReset, right]) => {
          this.leftSideImg.remove();
          this.leftSideImg.src = left;
          this.rightSideImg.remove();
          this.rightSideImg.src = right;

          console.log({ left, right });
        })
      )
      .subscribe();

    // Draw and animate parts on real canvas.
    this.tick$
      .pipe(
        filter((time) => time % 1000 !== 0),
        map((time) => time % 1000),
        map((timer) => {
          const endPointWithoutOffset = {
            x: this.currentLine.end.x - this.currentLine.start.x,
            y: this.currentLine.end.y - this.currentLine.start.y
          };
          const lineRadianAngle = calcLineAngle(endPointWithoutOffset);

          return {
            left: calcPointInPolarSystem(lineRadianAngle + Math.PI / 2, timer / 25),
            right: calcPointInPolarSystem(lineRadianAngle - Math.PI / 2, timer / 25)
          };
        }),
        switchMap(({ left, right }) =>
          forkJoin([
            this.realCanvas.reset(),
            this.realCanvas.clear(),
            this.realCanvas.drawImage(this.leftSideImg, left),
            this.realCanvas.drawImage(this.rightSideImg, right)
          ])
        )
      )
      .subscribe();
  }

  private resetFakeCanvas() {
    return forkJoin([this.fakeCanvas.reset(), this.fakeCanvas.drawImage(this.realCanvas.canvas, { x: 0, y: 0 })]);
  }
}

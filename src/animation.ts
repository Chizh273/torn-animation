import { BehaviorSubject, filter, forkJoin, map, switchMap, tap } from 'rxjs';

import { Line, Point } from './types';
import Canvas from './canvas';
import {
  applyOffset,
  calcLineAngle,
  calcLineLength,
  calcPointInPolarSystem,
  createLine,
  generateSides,
  generateTornLine
} from './math';

export default class Animation {
  private readonly _tick$ = new BehaviorSubject(0);

  private readonly sides = generateSides(this.width, this.height);

  private currentLine!: Line;

  private tornLine!: Point[];

  public get tick$() {
    return this._tick$.asObservable();
  }

  constructor(
    private readonly canvas: Canvas,
    private readonly prevCanvasImg: HTMLImageElement,
    private readonly width: number,
    private readonly height: number,
    private readonly offset: Point,
    private readonly lineLifeTicks = 100,
    private readonly speed = 7,
    private readonly backgroundColor = 'black',
    private readonly lineColor = 'white'
  ) {
    this.setup();
  }

  public dispatch() {
    this._tick$.next(this._tick$.value + 1);
  }

  private setup() {
    this.canvas.fill(this.backgroundColor);

    // Generate torn line every ${this.speed} ticks.
    this.tick$
      .pipe(
        filter((time) => time % this.lineLifeTicks === 0),
        switchMap(() => {
          return this.canvas.toDataUrl();
        }),
        tap((canvasImg) => {
          this.prevCanvasImg.src = canvasImg;
        })
      )
      .subscribe(() => {
        this.currentLine = createLine(this.sides, this.offset);
        const lineLength = calcLineLength(this.currentLine.start, this.currentLine.end);

        this.tornLine = generateTornLine(
          this.currentLine.start,
          this.currentLine.end,
          lineLength,
          parseInt(`${lineLength / 5}`, 10),
          Math.PI
        );
      });

    // Draw and animate torn line on the canvas.
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
            left: calcPointInPolarSystem(lineRadianAngle + Math.PI / 2, timer / this.speed),
            right: calcPointInPolarSystem(lineRadianAngle - Math.PI / 2, timer / this.speed)
          };
        }),

        map(({ left, right }) => ({
          left: this.tornLine.map((point) => applyOffset(point, left)),
          right: this.tornLine.reverse().map((point) => applyOffset(point, right))
        })),

        switchMap((figure) =>
          forkJoin([
            this.canvas.drawImage(this.prevCanvasImg, { x: 0, y: 0 }),
            this.canvas.drawFigure(figure, this.lineColor, this.backgroundColor)
          ])
        )
      )
      .subscribe();
  }
}

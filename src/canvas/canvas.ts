// @ts-ignore
import { fromPromise } from 'rxjs/src/internal/observable/innerFrom';
import { map, Observable, of } from 'rxjs';

import { Figure, Point } from '../types';

export default class Canvas {
  private readonly _ctx: CanvasRenderingContext2D;

  public get ctx() {
    return this._ctx;
  }

  public get canvas() {
    return this._canvas;
  }

  constructor(
    private readonly _canvas: HTMLCanvasElement,
    private readonly width: number,
    private readonly height: number,
  ) {
    this._canvas.width = width;
    this._canvas.height = height;

    this._ctx = this._canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  public save() {
    return fromPromise(Promise.resolve().then(() => this.ctx.save()));
  }

  public restore() {
    return fromPromise(Promise.resolve().then(() => this.ctx.restore()));
  }

  public drawImage(img: HTMLImageElement | HTMLCanvasElement, point: Point): Observable<void> {
    return fromPromise(
      Promise.resolve().then(() => {
        this.ctx.drawImage(img, point.x, point.y, this.canvas.width, this.canvas.height);
      }),
    );
  }

  public drawPath(path: Point[], lineColor: string, backgroundColor: string): Observable<string> {
    return fromPromise(
      Promise.resolve().then(() => {
        this.ctx.lineWidth = 7;
        this.ctx.strokeStyle = lineColor;
        this.ctx.fillStyle = backgroundColor;

        this.ctx.beginPath();
        path.forEach(({ x, y }) => this.ctx.lineTo(x, y));
        this.ctx.closePath();

        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.clip();
      }),
    ).pipe(map(() => this.canvas.toDataURL()));
  }

  public drawFigure({ left, right }: Figure, lineColor: string, backgroundColor: string): Observable<string> {
    return fromPromise(
      Promise.resolve().then(() => {
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = lineColor;
        this.ctx.fillStyle = backgroundColor;

        this.ctx.beginPath();
        [...left, ...right].forEach(({ x, y }) => this.ctx.lineTo(x, y));
        this.ctx.closePath();

        this.ctx.fill();
        this.ctx.stroke();
      }),
    ).pipe(map(() => this.canvas.toDataURL()));
  }

  public clear(): Observable<void> {
    return fromPromise(
      Promise.resolve().then(() => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }),
    );
  }

  public toDataUrl() {
    return of(this.canvas.toDataURL());
  }

  public fill(color: string) {
    this.ctx.fillStyle = color;
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.closePath();
    this.ctx.fill();
  }
}

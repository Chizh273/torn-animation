// @ts-ignore
import { fromPromise } from 'rxjs/src/internal/observable/innerFrom';
import { Observable } from 'rxjs';

import { Point } from '../types';

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
    private readonly height: number
  ) {
    this._canvas.width = width;
    this._canvas.height = height;

    this._ctx = this._canvas.getContext('2d') as CanvasRenderingContext2D;
  }

  public reset(): Observable<void> {
    return fromPromise(
      Promise.resolve().then(() => {
        // @ts-ignore
        this.ctx.reset();
      })
    );
  }

  public drawImage(img: HTMLImageElement | HTMLCanvasElement, point: Point): Observable<void> {
    return fromPromise(
      Promise.resolve().then(() => {
        this.ctx.drawImage(img, point.x, point.y, this.canvas.width, this.canvas.height);
      })
    );
  }

  public drawFigure(path: Point[], color = 'red'): Observable<string> {
    return fromPromise(
      Promise.resolve().then(() => {
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = color;

        this.ctx.beginPath();
        path.forEach(({ x, y }) => this.ctx.lineTo(x, y));
        this.ctx.closePath();

        this.ctx.stroke();
        this.ctx.clip();

        return this.canvas.toDataURL();
      })
    );
  }

  public clear(): Observable<void> {
    return fromPromise(
      Promise.resolve().then(() => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      })
    );
  }
}

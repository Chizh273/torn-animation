import createLine from './createLine';
import calcLineLength from './calcLineLength';
import generateTornLine from './generateTornLine';
import createCanvas from './createCanvas';
import generateSides from './generateSides';
import { Point, Sides } from './types';
import generateFigure from './generateFigureShape';
import { rotate180 } from './rotate';

export default class Animation {
  protected canvasWidth: number;

  protected canvasHeight: number;

  protected ctx: CanvasRenderingContext2D;

  protected fakeCanvas: HTMLCanvasElement;

  protected fakeCtx: CanvasRenderingContext2D;

  protected leftImg = new Image();

  protected rightImg = new Image();

  protected sides: Sides;

  protected currentPath: Point[] = [];

  private timer = 0;

  constructor(protected canvas: HTMLCanvasElement) {
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;

    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.sides = generateSides(canvas.width, canvas.height);

    this.fakeCanvas = createCanvas(canvas.width, canvas.height);
    this.fakeCtx = this.fakeCanvas.getContext('2d') as CanvasRenderingContext2D;

    // document.body.append(this.fakeCanvas);
    //
    // this.leftImg.classList.add('left');
    // this.rightImg.classList.add('right');
    //
    // document.body.append(this.leftImg);
    // document.body.append(this.rightImg);

    // Setup ctx's colors.
    this.ctx.strokeStyle = 'green';
    this.fakeCtx.strokeStyle = 'red';
    this.ctx.fillStyle = 'red';
    this.fakeCtx.fillStyle = 'red';
  }

  generateFigure() {
    const line = createLine(this.sides);
    const lineLength = calcLineLength(line.start, line.end);

    return [line.start, line.end];

    return generateTornLine(line.start, line.end, lineLength, parseInt(`${lineLength / 7}`, 10), Math.PI);
  }

  drawFigure(path: Point[]) {
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = 'red';
    this.ctx.fillStyle = 'black';

    this.ctx.beginPath();
    path.forEach(({ x, y }) => this.ctx.lineTo(x, y));
    this.ctx.closePath();

    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.clip();

    return this.canvas.toDataURL();
  }

  render() {
    if (this.timer % 100 === 0) {
      this.currentPath = this.generateFigure();
      const figure = generateFigure(this.currentPath, this.canvasWidth, this.canvasHeight, this.sides);

      // const movingLine = rotate180({ start: this.currentPath[0], end: this.currentPath[this.currentPath.length - 1] });

      // this.ctx.strokeStyle = 'red';
      //
      // this.ctx.beginPath();
      //
      // // [this.currentPath[0], this.currentPath[this.currentPath.length - 1]].forEach(({ x, y }) => this.ctx.lineTo(x, y));
      //
      // this.ctx.stroke();
      //
      // this.ctx.strokeStyle = 'red';
      //
      // this.ctx.beginPath();
      //
      // [ this.currentPath[0], this.currentPath[this.currentPath.length - 1]].forEach(({ x, y }) => this.ctx.lineTo(x, y));
      // this.ctx.stroke();

      this.leftImg.src = this.drawFigure(figure.right);

      // @ts-ignore https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/reset
      this.ctx.reset();

      this.rightImg.src = this.drawFigure(figure.left);
    } else {
      // @ts-ignore https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/reset
      this.ctx.reset();

      // const movingLine = rotate180({ start: this.currentPath[0], end: this.currentPath[this.currentPath.length - 1] });
      //
      // console.log(movingLine, { start: this.currentPath[0], end: this.currentPath[this.currentPath.length - 1] });

      this.ctx.drawImage(
        this.leftImg,
        (this.timer / 10) * -1,
        (this.timer / 10) * -1,
        this.canvasWidth,
        this.canvasHeight
      );
      this.ctx.drawImage(this.rightImg, this.timer / 10, this.timer / 10, this.canvasWidth, this.canvasHeight);
    }

    this.timer += 1;

    if (this.timer < 1000) {
      requestAnimationFrame(() => this.render());
    }
  }
}

import createLine from './createLine';
import calcLineLength from './calcLineLength';
import generateTornLine from './generateTornLine';
import createCanvas from './createCanvas';
import generateSides from './generateSides';

export default function renderer(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) {
  const mat = new DOMMatrix().translate(0, 0).scale(1, 1);
  const { ctx: fakeCtx, canvas: fakeCanvas } = createCanvas(width, height);

  const sides = generateSides(width, height);

  document.body.append(fakeCanvas);

  ctx.strokeStyle = 'gray';
  fakeCtx.strokeStyle = 'gray';

  // const getImageFromFakeCanvas = (originalCanvasImg, points) => {
  //   fakeCtx.clearRect(0, 0, width, height);
  //
  //   fakeCtx.drawImage(originalCanvasImg, 0, 0, width, height);
  //
  //   fakeCtx.beginPath();
  //   points.map(({ x, y }) => fakeCtx.lineTo(x, y));
  //   fakeCtx.stroke();
  //   fakeCtx.closePath();
  //
  //   // return fakeCtx.toDataURL('image/png');
  // };

  let timer = 0;

  const render = () => {
    if (timer % 100 === 0) {
      // const p1 = new Path2D();
      // p1.moveTo(100, 100);
      // p1.lineTo(150, 200);
      // p1.lineTo(50, 200);
      // p1.closePath();
      //
      // const p2 = new Path2D();
      // p2.addPath(p1, mat);
      // ctx.stroke(p2);

      ctx.beginPath();

      const line = createLine(sides);
      const lineLength = calcLineLength(line.start, line.end);
      const points = generateTornLine(line.start, line.end, lineLength, parseInt(`${lineLength / 7}`, 10), Math.PI);

      points.forEach(({ x, y }) => ctx.lineTo(x, y));

      ctx.stroke();
      ctx.closePath();

      // // --------------------------------------------------------------------------------
      //
      // const line2 = createLine(width, height);
      // const line2Length = calcLineLength(line2.start, line2.end);
      // const points2 = generateTornLine(line2.start, line2.end, line2Length, parseInt(`${line2Length / 7}`, 10), Math.PI);
      //
      // fakeCtx.drawImage(canvas, 0, 0, width, height);
    }

    timer += 1;

    requestAnimationFrame(render);
  };

  return render;
}

import createCanvas from './createCanvas';
import generateTornLine from './generateTornLine';
import createLine from './createLine';
import calcLineLength from './calcLineLength';

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const { ctx } = createCanvas({
  width: WIDTH,
  height: HEIGHT,
  parent: document.body
});

ctx.strokeStyle = 'gray';

const line = createLine(WIDTH, HEIGHT);
const lineLength = calcLineLength(line.start, line.end);

generateTornLine(line.start, line.end, lineLength, parseInt(`${lineLength / 7}`, 10), Math.PI).forEach(({ x, y }) =>
  ctx.lineTo(x, y)
);

// path.closePath();
// ctx.clip();

ctx.stroke();
// ctx.fillRect(0, 0, WIDTH, HEIGHT);

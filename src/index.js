import createCanvas from './createCanvas';
import renderer from './renderer';

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const { ctx, canvas } = createCanvas({
  width: WIDTH,
  height: HEIGHT
});

document.body.append(canvas);

renderer(canvas, ctx, WIDTH, HEIGHT)();

import AnimationV2 from './animation.v1';
import { Canvas } from './canvas';

const WIDTH = window.innerWidth + 600;
const HEIGHT = window.innerHeight + 600;

const canvas = new Canvas(document.createElement('canvas'), WIDTH, HEIGHT);
const img = document.createElement('img');

document.body.append(canvas.canvas);

const animation = new AnimationV2(canvas, img, WIDTH, HEIGHT, { x: 600, y: 600 });

(function render() {
  animation.dispatch();
  requestAnimationFrame(render);
})();

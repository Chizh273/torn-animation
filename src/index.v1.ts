import AnimationV1 from './animation.v1';
import { settings } from './settings';
import { Canvas } from './canvas';

const WIDTH = window.innerWidth + 600;
const HEIGHT = window.innerHeight + 600;

const canvas = new Canvas(document.createElement('canvas'), WIDTH, HEIGHT);
const img = document.createElement('img');

document.body.append(canvas.canvas);

const animation = new AnimationV1(canvas, img, WIDTH, HEIGHT, { x: 600, y: 600 }, settings);

console.log(settings);

(function render() {
  animation.dispatch();
  requestAnimationFrame(render);
})();

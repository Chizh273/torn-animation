import AnimationV2 from './animation.v2';
import { CanvasFactory } from './canvas';
import { settings } from './settings';

const WIDTH = window.innerWidth + 600;
const HEIGHT = window.innerHeight + 600;

const animation = new AnimationV2(new CanvasFactory(document), document, WIDTH, HEIGHT, { x: 600, y: 600 }, settings);

(function render() {
  animation.dispatch();
  requestAnimationFrame(render);
})();

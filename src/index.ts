import { CanvasFactory } from './canvas';
import AnimationV2 from './animation.v2';

const WIDTH = window.innerWidth + 600;
const HEIGHT = window.innerHeight + 600;

const animation = new AnimationV2(new CanvasFactory(document), document, WIDTH, HEIGHT, { x: 600, y: 600 });

(function render() {
  animation.dispatch();
  requestAnimationFrame(render);
})();

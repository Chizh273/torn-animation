import Animation from './animation';

const WIDTH = window.innerWidth + 600;
const HEIGHT = window.innerHeight + 600;

const animation = new Animation(document, WIDTH, HEIGHT, { x: 600, y: 600 });

(function render() {
  animation.dispatch();
  requestAnimationFrame(render);
})();

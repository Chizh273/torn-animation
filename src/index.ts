import createCanvas from './createCanvas';
import Animation from './animation';

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const canvas = createCanvas(WIDTH, HEIGHT);

document.body.append(canvas);

const renderer = new Animation(canvas);

renderer.render();

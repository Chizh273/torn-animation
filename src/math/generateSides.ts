import { Sides } from '../types';

const generateSides = (width: number, height: number): Sides => ({
  TOP: {
    start: { x: 0, y: 0 },
    end: { x: width, y: 0 }
  },
  RIGHT: {
    start: { x: width, y: 0 },
    end: { x: width, y: height }
  },
  BOTTOM: {
    start: { x: 0, y: height },
    end: { x: width, y: height }
  },
  LEFT: {
    start: { x: 0, y: 0 },
    end: { x: 0, y: height }
  }
});

export default generateSides;

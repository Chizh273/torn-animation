import { Point } from '../types';

const applyOffset = (point: Point, offset: Point) => ({
  x: point.x + offset.x,
  y: point.y + offset.y,
});

export default applyOffset;

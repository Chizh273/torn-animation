import { Point } from '../types';

const applyRotate = (angle: number, point: Point) => ({
  x: point.x * Math.cos(angle) - point.y * Math.sin(angle),
  y: point.x * Math.sin(angle) + point.y * Math.cos(angle),
});

export default applyRotate;

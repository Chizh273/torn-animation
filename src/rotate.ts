import { Line, Point } from './types';

export const applyRotate = (angle: number, point: Point) => ({
  x: point.x * Math.cos(angle) - point.y * Math.sin(angle),
  y: point.x * Math.sin(angle) + point.y * Math.cos(angle)
});

export const rotate180 = ({ start, end }: Line): Line => ({
  start: applyRotate(Math.PI, start),
  end: applyRotate(Math.PI, end)
});

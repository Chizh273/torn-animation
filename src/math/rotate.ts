import { Line, Point } from '../types';

export const applyRotate = (angle: number, point: Point) => ({
  x: point.x * Math.cos(angle) - point.y * Math.sin(angle),
  y: point.x * Math.sin(angle) + point.y * Math.cos(angle)
});

export const rotate90 = ({ start, end }: Line): Line => ({
  start: applyRotate(Math.PI / 2, start),
  end: applyRotate(Math.PI / 2, end)
});

export const applyOffset = (offset: Point, point: Point) => ({
  x: point.x + offset.x,
  y: point.y + offset.y
});

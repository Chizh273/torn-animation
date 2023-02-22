import random from 'lodash.random';
import { Point } from './types';

// https://stackoverflow.com/a/34372870
const getPointOnLine = (lineStart: Point, lineEnd: Point, lineDistance: number, distanceToPoint: number) => {
  const fractionOfTotal = distanceToPoint / lineDistance;

  return {
    x: lineStart.x + (lineEnd.x - lineStart.x) * fractionOfTotal,
    y: lineStart.y + (lineEnd.y - lineStart.y) * fractionOfTotal
  };
};

const applyOffset = (point: Point, offset: number) => {
  const offsetAbs = Math.abs(offset);

  return {
    x: point.x + random(offsetAbs * -1, offsetAbs, true),
    y: point.y + random(offsetAbs * -1, offsetAbs, true)
  };
};

const generateTornLine = (start: Point, end: Point, lineLength: number, countOfPoints: number, offset: number) => {
  const onePartSize = lineLength / countOfPoints;

  const { points } = Array.from({ length: countOfPoints - 1 }).reduce<{ points: Point[]; prevPoint: Point }>(
    (acc, _, i) => {
      const randDistance = random(onePartSize * i, onePartSize * (i + 1), true);

      const point = getPointOnLine(start, end, lineLength, randDistance);

      return {
        points: [...acc.points, applyOffset(point, offset)],
        prevPoint: point
      };
    },
    { points: [], prevPoint: start }
  );

  return [start, ...points, end];
};

export default generateTornLine;

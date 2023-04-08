import random from 'random';

import applyOffset from './applyOffset';
import { Point } from '../types';

// https://stackoverflow.com/a/34372870
export const getPointOnLine = (lineStart: Point, lineEnd: Point, lineDistance: number, distanceToPoint: number) => {
  const fractionOfTotal = distanceToPoint / lineDistance;

  return {
    x: lineStart.x + (lineEnd.x - lineStart.x) * fractionOfTotal,
    y: lineStart.y + (lineEnd.y - lineStart.y) * fractionOfTotal,
  };
};

const generateTornLine = (start: Point, end: Point, lineLength: number, countOfPoints: number, offset: number) => {
  const onePartSize = lineLength / countOfPoints;

  const { points } = Array.from({ length: countOfPoints - 1 }).reduce<{ points: Point[]; prevPoint: Point }>(
    (acc, _, i) => {
      const randDistance = random.float(onePartSize * i, onePartSize * (i + 1));

      const point = getPointOnLine(start, end, lineLength, randDistance);

      const offsetAbs = Math.abs(offset) * -1;
      const offsetPoint = { x: random.float(offsetAbs * -1, offsetAbs), y: random.float(offsetAbs * -1, offsetAbs) };

      return {
        points: [...acc.points, applyOffset(point, offsetPoint)],
        prevPoint: point,
      };
    },
    { points: [], prevPoint: start },
  );

  return [start, ...points, end];
};

export default generateTornLine;

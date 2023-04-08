import random from 'random';

import { Line, Point, Sides } from '../types';

const getRandomPointOnSide = ({ start, end }: Line, offset: Point) => {
  return {
    x: start.x === end.x ? start.x : random.float(start.x + offset.x, end.x - offset.x),
    y: start.y === end.y ? start.y : random.float(start.y + offset.y, end.y - offset.y),
  };
};

const createRandomLine = ({ TOP, RIGHT, BOTTOM, LEFT }: Sides, offset: Point): Line => {
  const startSide = random.choice([TOP, RIGHT, BOTTOM, LEFT]);
  let endSide = random.choice([TOP, RIGHT, BOTTOM, LEFT]);

  // Start side and end side can't be the same.
  while (startSide === endSide) {
    endSide = random.choice([TOP, RIGHT, BOTTOM, LEFT]);
  }

  return {
    start: getRandomPointOnSide(startSide as Line, offset),
    end: getRandomPointOnSide(endSide as Line, offset),
  };
};

export default createRandomLine;

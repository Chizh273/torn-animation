import random from 'lodash.random';
import shuffle from 'lodash.shuffle';

import { Line, Point, Sides } from '../types';

const getRandomPointOnSide = ({ start, end }: Line, offset: Point) => {
  return {
    x: start.x === end.x ? start.x : random(start.x + offset.x, end.x - offset.x, true),
    y: start.y === end.y ? start.y : random(start.y + offset.y, end.y - offset.y, true)
  };
};

const createRandomLine = ({ TOP, RIGHT, BOTTOM, LEFT }: Sides, offset: Point): Line => {
  const [startSide, endSide] = shuffle([TOP, RIGHT, BOTTOM, LEFT]);

  return {
    start: getRandomPointOnSide(startSide, offset),
    end: getRandomPointOnSide(endSide, offset)
  };
};

export default createRandomLine;

import random from 'lodash.random';
import shuffle from 'lodash.shuffle';

const getRandomPointOnSide = ({ start, end }) => {
  return {
    x: start.x === end.x ? start.x : random(start.x, end.x, true),
    y: start.y === end.y ? start.y : random(start.y, end.y, true)
  };
};

const createRandomLine = ({ TOP, RIGHT, BOTTOM, LEFT }) => {
  const [startSide, endSide] = shuffle([TOP, RIGHT, BOTTOM, LEFT]);

  return {
    start: getRandomPointOnSide(startSide),
    end: getRandomPointOnSide(endSide)
  };
};

export default createRandomLine;

import random from 'lodash.random';

const generateSides = (width, height) => ({
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

const getRandomPointOnSide = ({ start, end }) => {
  return {
    x: start.x === end.x ? start.x : random(start.x, end.x, true),
    y: start.y === end.y ? start.y : random(start.y, end.y, true)
  };
};

const createRandomLine = (width, height) => {
  const { TOP, RIGHT, BOTTOM, LEFT } = generateSides(width, height);
  let sides = [TOP, RIGHT, BOTTOM, LEFT];

  const startSideIdx = random(0, sides.length - 1);
  const startSide = sides[startSideIdx];

  sides = sides.filter((_, i) => i !== startSideIdx);

  const endSideIdx = random(0, sides.length - 1);
  const endSide = sides[endSideIdx];

  return {
    start: getRandomPointOnSide(startSide),
    end: getRandomPointOnSide(endSide)
  };
};

export default createRandomLine;

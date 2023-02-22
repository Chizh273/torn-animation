import { FigureSide, FigureSideShape, Point, PointSide, Sides } from './types';

export const getPointSide = (point: Point, canvasWidth: number, canvasHeight: number): PointSide => {
  if (point.x === 0 && point.y > 0 && point.y <= canvasHeight) {
    return 'LEFT';
  }

  if (point.y === 0 && point.x > 0 && point.x <= canvasWidth) {
    return 'TOP';
  }

  if (point.x === canvasWidth && point.y > 0 && point.y <= canvasHeight) {
    return 'RIGHT';
  }

  if (point.y === canvasHeight && point.x > 0 && point.x <= canvasWidth) {
    return 'BOTTOM';
  }

  throw new Error(`Illegal point: {x: ${point.x}, y: ${point.y}}.`);
};

export const generateFigureClosingPath = (
  startSide: PointSide,
  endSide: PointSide,
  sides: Sides,
  figureSide: FigureSide
) => {
  let directions: PointSide[] = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT', 'TOP', 'LEFT', 'BOTTOM', 'RIGHT'];

  if (figureSide === 'right') {
    directions = directions.reverse();
  }

  let currentSideIdx = directions.findIndex((side) => side === endSide);
  let closingPath: Point[] = [];

  while (directions[currentSideIdx] !== startSide) {
    const side = directions[currentSideIdx];

    switch (side) {
      case 'LEFT':
      case 'BOTTOM':
        closingPath = [...closingPath, figureSide === 'left' ? sides[side].end : sides[side].start];
        break;
      case 'RIGHT':
      case 'TOP':
        closingPath = [...closingPath, figureSide === 'left' ? sides[side].start : sides[side].end];
        break;
      default:
        // Do nothing.
        break;
    }
    currentSideIdx += 1;
  }

  return closingPath;
};

const generateFigure = (path: Point[], width: number, height: number, sides: Sides): FigureSideShape => {
  const startSide = getPointSide(path[0], width, height);
  const endSide = getPointSide(path[path.length - 1], width, height);

  return {
    left: [...path, ...generateFigureClosingPath(startSide, endSide, sides, 'left')],
    right: [...path, ...generateFigureClosingPath(startSide, endSide, sides, 'right')]
  };
};

export default generateFigure;

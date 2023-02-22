import { FigureSideShape, Point } from './types';

const generateFigureShape = (path: Point[], canvasWidth: number, canvasHeight: number): FigureSideShape => {
  const [start] = path;
  const end = path[path.length - 1];

  const left: Point[] = [];

  const right: Point[] = [];

  return {
    left,
    right
  };
};

export default generateFigureShape;

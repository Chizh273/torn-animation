export type Point = {
  x: number;
  y: number;
};

export type Line = {
  start: Point;
  end: Point;
};

export type PointSide = 'LEFT' | 'RIGHT' | 'TOP' | 'BOTTOM';

export type Sides = {
  TOP: Line;
  RIGHT: Line;
  BOTTOM: Line;
  LEFT: Line;
};

export type FigureSide = 'left' | 'right';

export type FigureSideShape = {
  startSide: PointSide;
  left: Point[];
  endSide: PointSide;
  right: Point[];
};

export type Figure = {
  left: Point[];
  right: Point[];
};

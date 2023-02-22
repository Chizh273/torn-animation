export type Point = {
  x: number;
  y: number;
};

export type Line = {
  start: Point;
  end: Point;
};

export type Sides = {
  TOP: Line;
  RIGHT: Line;
  BOTTOM: Line;
  LEFT: Line;
};

export type FigureSideShape = {
  left: Point[];
  right: Point[];
};

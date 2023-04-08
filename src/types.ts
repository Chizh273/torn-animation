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

export type Figure = {
  left: Point[];
  right: Point[];
};

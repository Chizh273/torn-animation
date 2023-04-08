import { Point } from '../types';

const calcLineRadianAngle = ({ x, y }: Point): number => {
  if (x > 0 && y >= 0) {
    return Math.atan(y / x);
  }

  if (x > 0 && y < 0) {
    return Math.atan(y / x) + 2 * Math.PI;
  }

  if (x < 0) {
    return Math.atan(y / x) + Math.PI;
  }

  if (x === 0 && y > 0) {
    return Math.PI / 2;
  }

  if (x === 0 && y < 0) {
    return (Math.PI * 3) / 2;
  }

  return 0;
};

export default calcLineRadianAngle;

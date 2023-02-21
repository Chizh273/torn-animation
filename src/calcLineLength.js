const calcLineLength = (start, end) => {
  const x = (end.x - start.x) ** 2;
  const y = (end.y - start.y) ** 2;

  return Math.sqrt(x + y);
};

export default calcLineLength;

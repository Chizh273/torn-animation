const generateFigureShape = (path, canvasWidth, canvasHeight) => {
  const [start] = path;
  const end = path[path.length - 1];

  const leftSideFigure = [];

  const rightSideFigure = [];

  return {
    leftSideFigure,
    rightSideFigure
  };
};

export default generateFigureShape;

const createCanvas = ({ width, height, parent }) => {
  const canvas = document.createElement('canvas');

  parent.appendChild(canvas);

  canvas.width = width;
  canvas.height = height;

  return {
    canvas,
    width: canvas.clientWidth,
    height: canvas.clientHeight,
    ctx: canvas.getContext('2d')
  };
};

export default createCanvas;

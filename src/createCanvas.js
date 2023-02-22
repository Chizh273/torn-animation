const createCanvas = ({ width, height }) => {
  const canvas = document.createElement('canvas');

  canvas.width = width;
  canvas.height = height;

  return { canvas, ctx: canvas.getContext('2d') };
};

export default createCanvas;

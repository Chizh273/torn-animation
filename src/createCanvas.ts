const createCanvas = (width: number, height: number) => {
  const canvas = document.createElement('canvas');

  canvas.width = width;
  canvas.height = height;

  return { canvas, ctx: canvas.getContext('2d') as CanvasRenderingContext2D };
};

export default createCanvas;

import Canvas from './canvas';

export default class CanvasFactory {
  constructor(private readonly document: Document) {}

  createCanvas(width: number, height: number) {
    return new Canvas(this.document.createElement('canvas'), width, height);
  }
}

import { GUI } from 'dat.gui';

type Settings = {
  lineLifeTicks: number;
  distanceCoefficient: number;
  lineColor: string;
  backgroundColor: string;
};

export default class AnimationSettings {
  constructor(public readonly data: Settings) {
    const gui = new GUI();

    gui.add(data, 'lineLifeTicks', 10, 300);
    gui.add(data, 'distanceCoefficient', 1, 10);
    gui.addColor(data, 'lineColor');
    gui.addColor(data, 'backgroundColor');
  }
}

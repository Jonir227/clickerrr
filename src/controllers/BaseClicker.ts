import IClickItem from '../models/ClickerItem';
import ScoreObserver from '../models/ScoreObserver';

class BaseClicker {
  private baseValue: number;
  private value: number;
  private items: IClickItem[];
  private scoreObserver: ScoreObserver;

  constructor(value: number, observer: ScoreObserver) {
    this.baseValue = value;
    this.value = value;
    this.items = [];
    this.scoreObserver = observer;
  }

  public onClick() {
    this.scoreObserver.increase(this.value);
  }

  public addItem(item: IClickItem) {
    this.items.push(item);
    this.empower();
  }

  public removeItem(item: IClickItem) {
    this.items = this.items.filter(i => i.name !== item.name);
    this.empower();
  }

  private empower() {
    this.value = this.items.reduce((acc, i) => acc + i.power, this.baseValue);
  }
}

export default BaseClicker;

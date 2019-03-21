import ScoreObserver from '../models/ScoreObserver';
import { interval } from 'rxjs';

class Employee {
  private name: string;
  private price: number;
  private efficiency: number;
  private score: ScoreObserver;

  constructor(name: string, price: number, efficiency: number, score: ScoreObserver) {
    this.name = name;
    this.price = price;
    this.efficiency = efficiency;
    this.score = score;
  }

  public work() {
    const worked = interval(this.efficiency);
    worked.subscribe(() => this.score.increase(this.price));
  }

  public getName() {
    return this.name;
  }
}

export default Employee;

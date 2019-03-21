import ScoreObserver from '../models/ScoreObserver';
import { interval } from 'rxjs';
import Company from './Company';

class Employee {
  private name: string;
  private price: number;
  private efficiency: number;

  constructor(name: string, price: number, efficiency: number) {
    this.name = name;
    this.price = price;
    this.efficiency = efficiency;
  }

  public work(company: Company) {
    const worked = interval(this.efficiency);
    worked.subscribe(() => company.profit(this.price));
  }

  public getName() {
    return this.name;
  }
}

export default Employee;

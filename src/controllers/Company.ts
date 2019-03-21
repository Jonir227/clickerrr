import Employee from './Employee';
import ScoreObserver from '../models/ScoreObserver';
import { Subject } from 'rxjs';
import { reduce, bufferTime, filter, mapTo, merge } from 'rxjs/operators';

class Company {
  private room: number;
  private employees: Employee[];
  private score: ScoreObserver;
  private companyProfitSubject: Subject<number>;

  constructor(score: ScoreObserver) {
    this.room = 1;
    this.employees = [];
    this.score = score;
    this.companyProfitSubject = new Subject();

    // 회사가 이익을 내면 스코어를 증가시킴
    // 100 ms 동안 발생된 이득을 배열로 만든뒤에 합친다음 보낸다.
    this.companyProfitSubject
      .pipe(
        bufferTime(100),
        filter(v => v.length != 0),
      )
      .subscribe(v => {
        const update = v.reduce((acc, v) => acc + v, 0);
        this.score.increase(update);
      });
  }

  public newRoom() {
    this.room++;
  }

  public hire(employee: Employee): boolean {
    if (this.room == this.employees.length) {
      return false;
    }
    employee.work(this);
    this.employees.push(employee);
    return true;
  }

  public profit(number: number) {
    console.log(number);
    this.companyProfitSubject.next(number);
  }
}

export default Company;

import { combineLatest, Observer, Subject } from 'rxjs';
import { bufferTime, filter } from 'rxjs/operators';
import ScoreObserver from '../models/ScoreObserver';
import Employee from './Employee';

class Company {
  private room: number;
  private employees: Employee[];
  private score: ScoreObserver;
  private companyProfitSubject: Subject<number>;
  private roomSubject: Subject<number>;
  private employeesSubject: Subject<Employee[]>;

  constructor(score: ScoreObserver) {
    this.room = 1;
    this.employees = [];
    this.score = score;
    this.companyProfitSubject = new Subject();
    this.roomSubject = new Subject();
    this.employeesSubject = new Subject();

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

  public subScribeRoom(observer: Observer<{ room: Number; employees: Employee[] }>) {
    // 두 옵저버를 합쳐준 뒤에
    const subScription = combineLatest(
      this.roomSubject,
      this.employeesSubject,
      (room, employees) => {
        console.log(1111);
        return {
          room,
          employees,
        };
      },
    ).subscribe(observer);

    // 각각의 옵저버블에 next를 보내준다.
    this.roomSubject.next(this.room);
    this.employeesSubject.next(this.employees);

    return subScription.unsubscribe;
  }

  public newRoom() {
    this.room++;
    this.roomSubject.next(this.room);
  }

  public hire(employee: Employee): boolean {
    if (this.room == this.employees.length) {
      return false;
    }
    employee.work(this);
    this.employees.push(employee);
    this.employeesSubject.next(this.employees);
    return true;
  }

  public profit(number: number) {
    this.companyProfitSubject.next(number);
  }
}

export default Company;

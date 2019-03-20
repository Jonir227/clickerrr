import { observable, Observable } from 'rxjs';

class BaseClicker {
  increment: number;
  scoreObserver: Observable<number>;

  constructor(observer: Observable<number>) {
    this.increment = 1;
    this.scoreObserver = observer;
  }
}

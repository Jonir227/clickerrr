import { Observable } from 'rxjs';

class ScoreObserver {
  private score = 0;
  private scoreObserver: Observable<number>;
  constructor() {
    this.scoreObserver = new Observable();
  }
}

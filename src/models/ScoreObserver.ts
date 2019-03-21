import { Subject, Observer } from 'rxjs';

class ScoreObserver {
  private score = 0;
  private scoreSubject: Subject<number>;

  constructor(score: number) {
    this.score = score;
    this.scoreSubject = new Subject();
  }

  public subScribe(observer: Observer<Number>) {
    // 초기 랜더
    observer.next(this.score);

    const subScription = this.scoreSubject.subscribe(observer);
    return subScription.unsubscribe;
  }

  public getScore() {
    return this.score;
  }

  public setScore(n: number) {
    this.score = n;
    this.scoreSubject.next(this.score);
  }

  public increase(n: number) {
    this.score += n;
    this.scoreSubject.next(this.score);
  }
}

export default ScoreObserver;

import ScoreObserver from '../../models/ScoreObserver';

const scoreboard = function(el: Element, scoreObserver: ScoreObserver) {
  // 앨리먼트 캐시
  const scoreElement = el.querySelector('.score');

  function render(n: Number) {
    if (scoreElement) scoreElement.innerHTML = n.toString();
  }

  scoreObserver.subScribe({ next: render, error: () => {}, complete: () => {} });
};

export default scoreboard;

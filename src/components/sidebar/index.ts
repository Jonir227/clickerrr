import scoreboard from './scoreboard';
import clickerButton from './clickerButton';
import scoreObserver from '../../instances/scoreObserver';
import baseClicker from '../../instances/clickerButton';

function sidebar(el: HTMLElement) {
  // 앨리먼트 캐시
  const scoreboardEl = el.querySelector('.score-board');
  const clickerButtonEl = el.querySelector('.clicker');

  scoreboardEl && scoreboard(scoreboardEl, scoreObserver);
  clickerButtonEl && clickerButton(clickerButtonEl, baseClicker);
}

export default sidebar;

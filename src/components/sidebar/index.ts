import { company } from '../../instances';
import baseClicker from '../../instances/clickerButton';
import scoreObserver from '../../instances/scoreObserver';
import clickerButton from './clickerButton';
import companyManager from './companyManager';
import scoreboard from './scoreboard';

function sidebar(el: HTMLElement) {
  // 앨리먼트 캐시
  const scoreboardEl = el.querySelector('.score-board');
  const clickerButtonEl = el.querySelector('.clicker');
  const companyManagerEl = el.querySelector('#company-manager');

  scoreboardEl && scoreboard(scoreboardEl, scoreObserver);
  clickerButtonEl && clickerButton(clickerButtonEl, baseClicker);
  companyManagerEl && companyManager(companyManagerEl, company);
}

export default sidebar;

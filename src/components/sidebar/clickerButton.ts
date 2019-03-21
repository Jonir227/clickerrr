import BaseClicker from '../../controllers/BaseClicker';
import { fromEvent } from 'rxjs';

function clickerButton(el: Element, baseClicker: BaseClicker) {
  // 버튼 이벤트 정의
  const buttonEvent = fromEvent(el, 'click');

  buttonEvent.subscribe(() => baseClicker.onClick());
}

export default clickerButton;

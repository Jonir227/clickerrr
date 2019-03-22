import { company } from '../../instances';
import room from './room';

function mainContent(el: Element) {
  room(el, company);
}

export default mainContent;

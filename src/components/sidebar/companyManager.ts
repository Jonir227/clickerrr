import { fromEvent } from 'rxjs';
import { Company } from '../../controllers';

function companyManager(el: Element, company: Company) {
  // cache elements
  const expandButtonElement = el.querySelector('.btn-room-expand');

  expandButtonElement &&
    fromEvent(expandButtonElement, 'click').subscribe(e => {
      company.newRoom();
    });
}

export default companyManager;

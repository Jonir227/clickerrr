import { Company, Employee } from '../../controllers';

function room(el: Element, company: Company) {
  function render({ room, employees }: { room: Number; employees: Employee[] }) {
    let render = '';
    for (let i = 0; i < room; i++) {
      const employee = (employees[i] && employees[i].getName()) || 'empty';
      render += `
        <div class="room">
          ${employee}
        </div>
      `;
    }
    el.innerHTML = render;
  }
  company.subScribeRoom({
    next: render,
    error: e => {
      console.error(e);
    },
    complete: () => {
      console.log('ended');
    },
  });
}

export default room;

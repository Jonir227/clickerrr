function room(el: Element) {
  function render(rooms: number) {
    let render = '';
    for (let i = 0; i < rooms; i++) {
      render += `
        <div class="room">
          room
        </div>
      `;
    }
    el.innerHTML = render;
  }
  render(3);
}

export default room;

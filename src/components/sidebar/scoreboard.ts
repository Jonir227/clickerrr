const scoreboard = function(el: HTMLElement) {
  // state
  const score = 0;

  // elements
  const fragment = document.createDocumentFragment();
  const scoreElement = document.createElement('div');

  scoreElement.innerText = score + '';

  const childs = [scoreElement];

  function render() {
    childs.forEach(e => {
      fragment.appendChild(scoreElement);
    });
    el.appendChild(fragment);
  }

  render();
};

export default scoreboard;

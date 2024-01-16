const defaultCards = [
  { front: 'Front 1', back: 'Back 1<b>Bold text</b>' },
  {
    front: 'Front 2',
    back:
      "Back 2. <img width='80px' height='30px' src='https://wise.berkeley.edu/assets/img/wise-web-header-img@2x.webp'></img>",
  },
  { front: 'Front 3', back: 'Back 3' },
];

document.addEventListener('DOMContentLoaded', () => {
  const queryString = window.location.search || 'cards=' + JSON.stringify(defaultCards);
  const searchParams = new URLSearchParams(queryString);
  const cards = JSON.parse(searchParams.get('cards'));
  const app = document.getElementById('app');
  cards.forEach((card) => {
    app.appendChild(createCardElement(card));
  });
});

function createCardElement(card) {
  const cardElement = document.createElement('div');
  cardElement.className = 'card';
  cardElement.onclick = (el) => {
    el.currentTarget.classList.toggle('flip');
  };

  const inner = document.createElement('div');
  inner.className = 'card-inner';

  const front = document.createElement('div');
  front.className = 'face front';
  front.innerHTML = card.front;
  inner.appendChild(front);

  const back = document.createElement('div');
  back.className = 'face back';
  back.innerHTML = card.back;
  inner.appendChild(back);

  cardElement.appendChild(inner);
  return cardElement;
}

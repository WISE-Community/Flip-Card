const content = [
  {
    front: 'Click this box to reveal what happens if Eric chooses to participate!',
    back:
      "Eric chooses to participate. The doctor and researcher protect Eric's privacy and the data is used for research. The researcher shares the findings from their work with Eric and his family.",
  },
  {
    front: 'Click this box to reveal what happens if Eric chooses not to participate!',
    back:
      'Eric chooses not to participate. The researcher respects his choice and ask if he wants to be asked about other studies in the future. Eric and parents say yes. Research continues with different participants who said yes.',
  },
  {
    front: 'Click this box to reveal what happens if Eric takes more time to decide!',
    back:
      'Eric and his parents decide they need more time to decide. Eric and his parents have a meeting with the researcher and prepare more question. The meeting provides a lot of information and Eric and his family revisit their decision at his next doctor’s appointment.',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  content.forEach((card) => {
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

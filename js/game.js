const cards = document.querySelectorAll('.memory_card');
const cardsCount = cards.length;
let cardsPair = cardsCount / 2;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();

  if (cardsPair === 0) {
    setTimeout(() =>
      alert("Молодец! Все пары собраны!"), 2000);
  }

}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;
  if (isMatch) {
    disableCards();
    cardsPair--;
  } else unflipCards();
}

function checkPairs() {


}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1500);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

(function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.ceil(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

function sleep(miliseconds) {
  let currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {}
}

cards.forEach(card => card.addEventListener('click', flipCard));
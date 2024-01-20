let currentIndex = 0;
const cardSlider = document.querySelector('.card-slider');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

function showCard(index) {
  if (index < 0) {
    index = totalCards - 1;
  } else if (index >= totalCards) {
    index = 0;
  }

  const translateValue = -index * (cards[0].offsetWidth + 10);
  cardSlider.style.transform = `translateX(${translateValue}px)`;
  currentIndex = index;
}

function nextCard() {
  showCard(currentIndex + 1);
}

function prevCard() {
  showCard(currentIndex - 1);
}

// Optional: Auto slide
setInterval(nextCard, 3000);

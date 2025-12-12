const tg = window.Telegram.WebApp;
tg.expand();

/* === СПИСОК ПОДАРКОВ === */
const gifts = [
  {
    name: "Lush Bouquet",
    image: "static/img/lush.png",
    link: "https://t.me/nft/LushBouquet-13840"
  },
  {
    name: "Crystal Ball",
    image: "static/img/crystal.png",
    link: "https://t.me/nft/CrystalBall-185"
  },
  {
    name: "Sleigh Bell",
    image: "static/img/bell.png",
    link: "https://t.me/nft/SleighBell-1239"
  }
];

/* === РАНДОМ ЦЕНЫ === */
function randomPrice(min = 100, max = 1500) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* === РЕНДЕР МАРКЕТА === */
const market = document.getElementById("market");

gifts.forEach(gift => {
  const price = randomPrice();

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${gift.image}" />
    <div class="title">${gift.name}</div>
    <div class="price">⭐ ${price}</div>
    <a class="btn" href="${gift.link}" target="_blank">
      Посмотреть
    </a>
  `;

  market.appendChild(card);
});

// Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();

// элементы
const goBtn = document.getElementById("goInv");
const inv = document.getElementById("inv");

// тестовый инвентарь (пока заглушка)
const gifts = [
  {
    id: "13840",
    name: "Lush Bouquet",
    img: "https://t.me/nft/LushBouquet-13840"
  }
];

// кнопка «Перейти в инвентарь»
goBtn.addEventListener("click", () => {
  inv.classList.remove("hidden");
  inv.innerHTML = "";

  gifts.forEach(g => {
    const el = document.createElement("div");
    el.className = "card";
    el.innerHTML = `
      <div class="big">🎁 ${g.name}</div>
      <a href="${g.img}" target="_blank">Показать подарок</a>
    `;
    inv.appendChild(el);
  });
});

const tg = window.Telegram.WebApp;
tg.expand();

// Tabs logic
const tabs = document.querySelectorAll(".tab");
const screens = document.querySelectorAll(".screen");

tabs.forEach(tab => {
  tab.onclick = () => {
    tabs.forEach(t => t.classList.remove("active"));
    screens.forEach(s => s.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  };
});

// Fake gifts (витрина)
const gifts = [
  {
    name: "Lush Bouquet",
    price: 250,
    img: "https://i.imgur.com/8Km9tLL.jpg"
  },
  {
    name: "Golden Rose",
    price: 500,
    img: "https://i.imgur.com/Qd6wE1H.jpg"
  },
  {
    name: "Winter Box",
    price: 120,
    img: "https://i.imgur.com/1Xq9BiK.jpg"
  },
  {
    name: "Crystal Heart",
    price: 800,
    img: "https://i.imgur.com/5tj6S7Ol.jpg"
  }
];

function render(sectionId, title) {
  const el = document.getElementById(sectionId);
  el.innerHTML = "";

  gifts.forEach(g => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${g.img}">
      <div class="name">${g.name}</div>
      <div class="price">⭐ ${g.price}</div>
    `;
    el.appendChild(card);
  });
}

// Initial render
render("market");
render("inventory");
render("cart");

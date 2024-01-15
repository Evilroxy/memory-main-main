let cards = Array.from(document.querySelectorAll(".card"));
let clicked1;
let clicked2;
const btnnew = document.getElementById("#btnnew");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    cards[i].classList.add("open");
    if (!clicked1) {
      clicked1 = cards[i];
    } else {
      clicked2 = cards[i];
      verify();
    }
    console.log(clicked1, clicked2);
  });
}

function verify() {
  if (clicked1.getAttribute("data-key") === clicked2.getAttribute("data-key")) {
    clicked1.classList.add("open");
    clicked2.classList.add("open");
  } else {
    setTimeout(() => {
      clicked1.classList.remove("open");
      clicked2.classList.remove("open");
    }, 1000);
  }
  clicked1;
  clicked2;
}

/*function melange() {
  const results = [];
  const length = cards.length;
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * cards.length);
    results.push(cards[random]);
    cards = cards.filter((card) => card !== cards[random]);
  }
  return results;
} */

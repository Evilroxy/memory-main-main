let cards = Array.from(document.querySelectorAll(".card"));
let clicked1 = "";
let flag = false;
const btnnew = document.getElementById("#btnnew");

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    if (flag == false) {
      cards[i].classList.add("open");
      if (clicked1 == "") {
        clicked1 = cards[i];
      } else if (
        clicked1.getAttribute("data-key") !== cards[i].getAttribute("data-key")
      ) {
        flag = true;
        setTimeout(() => {
          clicked1.classList.remove("open");
          cards[i].classList.remove("open");
          clicked1 = "";
          flag = false;
        }, 1000);
      } else {
        clicked1 = "";
      }
    }
  });
}



function melange(arr) {
  const results = [];
  // const length = cards.length;
  while (arr.length > 0) {
    randomIndex = Math.Floor(Math.random() * arr.length)
    results.push(arr[randomIndex])
    arr.slice(1,randomIndex).concat(arr.slice(randomIndex + 1))
    arr = [];
    return results
  }
}
  // for (let i = 0; i < length; i++) {
  //   const random = Math.floor(Math.random() * cards.length);
  //   results.push(cards[random]);
  //   cards = cards.filter((card) => card !== cards[random]);
  // }
  // return results;
 

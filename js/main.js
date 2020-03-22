let rangeSources = ["src='/images/jackpot.jpg'", "src='/images/top-5.png' data-range='5'", "src='/images/top-7.png' data-range='7'", "src='/images/top-10.png' data-range='10'", "src='/images/top-12.png' data-range='12'", "src='/images/top-15.png' data-range='15'", "src='/images/top-17.png' data-range='17'", "src='/images/top-20.png' data-range='20'", "src='/images/top-22.png' data-range='22'", "src='/images/top-25.png' data-range='25'", "src='/images/top-27.png' data-range='27'", "src='/images/top-30.png' data-range='30'", "src='/images/top-35.png' data-range='35'", "src='/images/top-40.png' data-range='40'", "src='/images/top-50.png' data-range='50'"];
let heroHands10 = {
  points: 10, range: ["AA", "KK", "AKs", "QQ", "AKo", "JJ", "AQs", "TT", "AQo"]
};
let heroHands9 = {
  points: 9, range: ["99", "AJs", "88", "ATs", "AJo", "77", "66", "ATo", "A9s", "55", "A8s", "KQs", "A9o", "A7s", "KJs", "A5s", "A6s", "A4s", "KTs", "A3s", "A2s"]
};
let heroHands8 = {
  points: 9, range: ["44", "A9o", "A7s", "KJs", "A5s", "A8o", "A6s", "A4s", "33", "KTs", "A7o", "A3s", "KQo", "A2s", "A5o", "A6o", "A4o", "KJo", "A3o", "22", "K9s", "A2o", "KTo"]
};
let heroHands7 = {
  points: 9, range: ["QTs", "K8s", "K7s", "JTs", "K9o", "K6s", "QJo"]
};
let heroHands6 = {
  points: 9, range: ["Q9s", "K5s", "K8o", "K4s", "QTo", "K7o", "K3s", "K2s", "Q8s", "K6o", "J9s", "K5o", "Q9o", "JTo", "K4o", "K3o", "K2o"]
};
let heroHands5 = {
  points: 9, range: ["Q7s", "T9s", "Q6s", "J8s", "Q5s", "Q8o", "Q4s", "J9o", "Q3s", "J7s", "Q7o", "Q2s", "Q6o", "Q5o", "J8o", "J6s", "J5s", "Q4o", "J4s", "J7o", "Q3o", "J3s", "Q2o", "J2s", "J6o", "J5o", "J4o", "J3o", "J2o"]
};
let heroHands4 = {
  points: 9, range: ["T9s", "T8s", "T9o", "T7s", "T8o", "T6s", "T7o", "T5s", "T4s", "T6o", "T3s", "T2s", "T5o", "T4o", "T3o", "T2o"]
};
let heroHands3 = {
  points: 9, range: ["98s", "97s", "87s", "98o", "96s", "86s", "97o", "95s", "87o", "85s", "96o", "94s", "86o", "93s", "84s", "95o", "92s", "85o", "83s", "94o", "82s", "93o", "84o", "92o", "83o", "82o"]
};
let heroHands2 = {
  points: 9, range: ["76s", "75s", "76o", "74s", "75o", "82s", "73s", "74o", "72s", "73o", "72o"]
};
let heroHands1 = {
  points: 9, range: ["65s", "54s", "64s", "65o", "53s", "63s", "43s", "54o", "64o", "52s", "62s", "42s", "53o", "63o", "32s", "43o", "52o", "62o", "42o", "32o"]
};

let range = 1;
window.addEventListener("wheel", onHandleScroll);

function onHandleScroll() {
  if (range < rangeSources.length) {
    let rangeImage = document.getElementById("range-image");
    let input = document.getElementById("range-input");
    let rangeSrc = rangeSources[range];
    rangeImage.innerHTML = `<img ${rangeSrc} />`
    input.value = rangeImage.firstChild.dataset.range
    range++
  } else {
    range = 1;
  }
}




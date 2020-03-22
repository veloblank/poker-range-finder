let rangeSources = ["src='/images/jackpot.jpg'", "src='/images/top-5.png' data-range='13'", "src='/images/top-7.png' data-range='12'", "src='/images/top-10.png' data-range='11'", "src='/images/top-12.png' data-range='10'", "src='/images/top-15.png' data-range='9'", "src='/images/top-17.png' data-range='8'", "src='/images/top-20.png' data-range='7'", "src='/images/top-22.png' data-range='6'", "src='/images/top-25.png' data-range='5'", "src='/images/top-27.png' data-range='4'", "src='/images/top-30.png' data-range='3'", "src='/images/top-35.png' data-range='2'", "src='/images/top-40.png' data-range='1'", "src='/images/top-50.png' data-range='0'"];

let heroHands10 = {
  points: 10, range: ["AA", "KK", "AKS", "QQ", "AKO", "JJ", "AQS", "TT", "AQO"]
};
let heroHands9 = {
  points: 9, range: ["99", "AJS", "88", "ATS", "AJO", "77", "66", "ATO", "A9S", "55", "A8S", "KQS", "A9O", "A7S", "KJS", "A5S", "A6S", "A4S", "KTS", "A3S", "A2S"]
};
let heroHands8 = {
  points: 9, range: ["44", "A9O", "A7S", "KJS", "A5S", "A8O", "A6S", "A4S", "33", "KTS", "A7O", "A3S", "KQO", "A2S", "A5O", "A6O", "A4O", "KJO", "A3O", "22", "K9S", "A2O", "KTO"]
};
let heroHands7 = {
  points: 9, range: ["QTS", "K8S", "K7S", "JTS", "K9O", "K6S", "QJO"]
};
let heroHands6 = {
  points: 9, range: ["Q9S", "K5S", "K8O", "K4S", "QTO", "K7O", "K3S", "K2S", "Q8S", "K6O", "J9S", "K5O", "Q9O", "JTO", "K4O", "K3O", "K2O"]
};
let heroHands5 = {
  points: 9, range: ["Q7S", "T9S", "Q6S", "J8S", "Q5S", "Q8O", "Q4S", "J9O", "Q3S", "J7S", "Q7O", "Q2S", "Q6O", "Q5O", "J8O", "J6S", "J5S", "Q4O", "J4S", "J7O", "Q3O", "J3S", "Q2O", "J2S", "J6O", "J5O", "J4O", "J3O", "J2O"]
};
let heroHands4 = {
  points: 9, range: ["T9S", "T8S", "T9O", "T7S", "T8O", "T6S", "T7O", "T5S", "T4S", "T6O", "T3S", "T2S", "T5O", "T4O", "T3O", "T2O"]
};
let heroHands3 = {
  points: 9, range: ["98S", "97S", "87S", "98O", "96S", "86S", "97O", "95S", "87O", "85S", "96O", "94S", "86O", "93S", "84S", "95O", "92S", "85O", "83S", "94O", "82S", "93O", "84O", "92O", "83O", "82O"]
};
let heroHands2 = {
  points: 9, range: ["76S", "75S", "76O", "74S", "75O", "82S", "73S", "74O", "72S", "73O", "72O"]
};
let heroHands1 = {
  points: 9, range: ["65S", "54S", "64S", "65O", "53S", "63S", "43S", "54O", "64O", "52S", "62S", "42S", "53O", "63O", "32S", "43O", "52O", "62O", "42O", "32O"]
};

let range = 1;
let villainRange;
let stackPoints;
window.addEventListener("wheel", onHandleScroll);

function onHandleScroll() {
  if (range < rangeSources.length) {
    let rangeImage = document.getElementById("range-image");
    let input = document.getElementById("range-input");
    let rangeSrc = rangeSources[range];
    rangeImage.innerHTML = `<img ${rangeSrc} />`
    villainRange = rangeImage.firstChild.dataset.range
    input.innerHTML = villainRange
    range++
  } else {
    range = 1;
  }
}

function onHandChange(e) {
  let handValue = document.getElementById("hand-value");
  let heroHand = e.value.toUpperCase();
  if (heroHands10.range.includes(heroHand)) {
    handValue.innerHTML = 10;
  }
  if (heroHands9.range.includes(heroHand)) {
    handValue.innerHTML = 9;
  }
  if (heroHands8.range.includes(heroHand)) {
    handValue.innerHTML = 8;
  }
  if (heroHands7.range.includes(heroHand)) {
    handValue.innerHTML = 7;
  }
  if (heroHands6.range.includes(heroHand)) {
    handValue.innerHTML = 6;
  }
  if (heroHands5.range.includes(heroHand)) {
    handValue.innerHTML = 5;
  }
  if (heroHands4.range.includes(heroHand)) {
    handValue.innerHTML = 4;
  }
  if (heroHands3.range.includes(heroHand)) {
    handValue.innerHTML = 3;
  }
  if (heroHands2.range.includes(heroHand)) {
    handValue.innerHTML = 2;
  }
  if (heroHands1.range.includes(heroHand)) {
    handValue.innerHTML = 1;
  }
}

function onStackChange(e) {
  let effStack = e.value;
  let stack = document.getElementById("stack-value");
  if (effStack <= 2) {
    stackPoints = 11
    stack.innerHTML = stackPoints;
  } else if (effStack <= 3) {
    stackPoints = 10
    stack.innerHTML = stackPoints;
  } else if (effStack <= 3.5) {
    stackPoints = 9
    stack.innerHTML = stackPoints;
  } else if (effStack <= 4) {
    stackPoints = 8
    stack.innerHTML = stackPoints;
  } else if (effStack <= 5) {
    stackPoints = 7
    stack.innerHTML = stackPoints;
  } else if (effStack <= 6) {
    stackPoints = 6
    stack.innerHTML = stackPoints;
  } else if (effStack <= 7) {
    stackPoints = 5
    stack.innerHTML = stackPoints;
  } else if (effStack <= 7.75) {
    stackPoints = 4
    stack.innerHTML = stackPoints;
  } else if (effStack <= 8.25) {
    stackPoints = 3
    stack.innerHTML = stackPoints;
  } else if (effStack <= 9) {
    stackPoints = 2
    stack.innerHTML = stackPoints;
  } else if (effStack <= 10) {
    stackPoints = 1
    stack.innerHTML = stackPoints;
  }
}




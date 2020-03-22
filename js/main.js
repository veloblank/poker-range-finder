let rangeSources = ["src='/images/jackpot.jpg'", "src='/images/top-5.png' data-range='5'", "src='/images/top-7.png' data-range='7'", "src='/images/top-10.png' data-range='10'", "src='/images/top-12.png' data-range='12'", "src='/images/top-15.png' data-range='15'", "src='/images/top-17.png' data-range='17'", "src='/images/top-20.png' data-range='20'", "src='/images/top-22.png' data-range='22'", "src='/images/top-25.png' data-range='25'", "src='/images/top-27.png' data-range='27'", "src='/images/top-30.png' data-range='30'", "src='/images/top-35.png' data-range='35'", "src='/images/top-40.png' data-range='40'", "src='/images/top-50.png' data-range='50'"];
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


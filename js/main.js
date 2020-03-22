let images = document.getElementsByTagName("img");
let input = document.getElementById("range-input");
for (let image of images) {
  image.addEventListener("click", function () {
    input.value = image.dataset.range
  })
}
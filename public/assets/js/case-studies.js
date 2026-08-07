const images = [...document.querySelectorAll(".solution-image")];

const counter = document.getElementById("current-image");
const total = document.getElementById("total-images");
const caption = document.getElementById("image-caption");

let currentIndex = 0;

total.textContent = images.length;


function renderImages() {
  images.forEach((img, index) => {
    img.classList.remove("active", "middle", "back");

    const position = (index - currentIndex + images.length) % images.length;

    if (position === 0) {
      img.classList.add("active");
    } else if (position === 1) {
      img.classList.add("middle");
    } else {
      img.classList.add("back");
    }
  });

  counter.textContent = currentIndex + 1;
  caption.textContent = images[currentIndex].alt;
}


function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  renderImages();
}


images.forEach(img => {
  img.addEventListener("click", nextImage);
});


document
  .querySelector(".image-next")
  .addEventListener("click", nextImage);


renderImages();
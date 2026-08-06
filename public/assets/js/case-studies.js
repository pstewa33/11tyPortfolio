const images = [...document.querySelectorAll(".solution-image")];
const counter = document.getElementById("current-image");
const caption = document.getElementById("image-caption");

function updateImageInfo() {
  const activeImage = document.querySelector(".solution-image.active");
  const current = images.indexOf(activeImage);

  counter.textContent = current + 1;
  caption.textContent = activeImage.alt;
}

function rotateImages() {
  images.forEach(img => {
    if (img.classList.contains("active")) {
      img.classList.replace("active", "back");
    } else if (img.classList.contains("middle")) {
      img.classList.replace("middle", "active");
    } else {
      img.classList.replace("back", "middle");
    }
  });

  updateImageInfo();
}

images.forEach(img => {
  img.addEventListener("click", rotateImages);
});

document
  .querySelector(".image-next")
  .addEventListener("click", rotateImages);

// Set the initial caption and counter
updateImageInfo();
// ---------- Elements ----------

const images = [...document.querySelectorAll(".solution-image")];

const nextButton = document.querySelector(".image-next");
const expandButton = document.querySelector(".image-expand");

const caption = document.getElementById("image-caption");
const counter = document.getElementById("current-image");
const total = document.getElementById("total-images");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxCounter = document.getElementById("lightbox-counter");

const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextLightboxButton = document.querySelector(".lightbox-next");

// ---------- State ----------

let currentIndex = 0;

total.textContent = images.length;

// ---------- Gallery ----------

function renderGallery() {

    images.forEach((img, index) => {

        img.classList.remove("active", "middle", "back");

        const position =
            (index - currentIndex + images.length) % images.length;

        if (position === 0) {

            img.classList.add("active");

        } else if (position === 1) {

            img.classList.add("middle");

        } else {

            img.classList.add("back");

        }

    });

    caption.textContent = images[currentIndex].alt;
    counter.textContent = currentIndex + 1;

    if (!lightbox.classList.contains("hidden")) {
        updateLightbox();
    }

}

// ---------- Navigation ----------

function nextImage() {

    currentIndex =
        (currentIndex + 1) % images.length;

    renderGallery();

}

function previousImage() {

    currentIndex =
        (currentIndex - 1 + images.length) % images.length;

    renderGallery();

}

// ---------- Lightbox ----------

function updateLightbox() {

    const image = images[currentIndex];

    lightboxImage.classList.remove("zoom");

    lightboxImage.src = image.src;

    lightboxCaption.textContent = image.alt;

    lightboxCounter.textContent =
        `${currentIndex + 1} / ${images.length}`;

    lightboxImage.onload = () => {

        const ratio =
            lightboxImage.naturalHeight /
            lightboxImage.naturalWidth;

        const wrapper =
            document.querySelector(".lightbox-image-wrapper");

        wrapper.classList.toggle(
            "tall-image",
            ratio > 1.8
        );

    };

}

function openLightbox() {

    document.body.classList.add("lightbox-open");

    updateLightbox();

    lightbox.classList.remove("hidden");

}

function closeLightbox() {

    document.body.classList.remove("lightbox-open");

    lightbox.classList.add("hidden");

}

// ---------- Event Listeners ----------

// Click gallery image
images.forEach(img => {
    img.addEventListener("click", nextImage);
});

// Next button
nextButton.addEventListener("click", nextImage);

// Expand button
expandButton.addEventListener("click", openLightbox);

// Lightbox controls
closeButton.addEventListener("click", closeLightbox);

nextLightboxButton.addEventListener("click", nextImage);

prevButton.addEventListener("click", previousImage);

lightboxImage.addEventListener("click", () => {
    lightboxImage.classList.toggle("zoom");
});

// Click outside image to close
lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {
        closeLightbox();
    }

});

// Keyboard controls
document.addEventListener("keydown", (e) => {

    if (lightbox.classList.contains("hidden")) return;

    switch (e.key) {

        case "Escape":
            closeLightbox();
            break;

        case "ArrowRight":
            nextImage();
            break;

        case "ArrowLeft":
            previousImage();
            break;

    }

});

// ---------- Initialize ----------

renderGallery();
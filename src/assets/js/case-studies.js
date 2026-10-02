// ---------- Shared Lightbox ----------

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxCounter = document.getElementById("lightbox-counter");

const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextLightboxButton = document.querySelector(".lightbox-next");

let activeGallery = null;


// ---------- Gallery Initialization ----------

document.querySelectorAll(".solution-images").forEach(gallery => {

    const images = [
        ...gallery.querySelectorAll(".solution-image")
    ];

    const nextButton =
        gallery.querySelector(".image-next");

    const expandButton =
        gallery.querySelector(".image-expand");

    // Supports both:
    // .image-caption / .current-image / .total-images
    // and the old ID-based markup
    const caption =
        gallery.querySelector(".image-caption") ||
        gallery.querySelector("#image-caption");

    const counter =
        gallery.querySelector(".current-image") ||
        gallery.querySelector("#current-image");

    const total =
        gallery.querySelector(".total-images") ||
        gallery.querySelector("#total-images");

    let currentIndex = 0;


    // Safety check
    if (!images.length) return;


    // ---------- Initial Counter ----------

    if (total) {
        total.textContent = images.length;
    }


    // ---------- Determine Carousel Type ----------

    /*
        Global Change carousel:
        .solution-images.gc-carousel

        Pattern Library carousel:
        regular .solution-images
    */

    const isGCCarousel =
        gallery.classList.contains("gc-carousel");


    // ---------- Render Gallery ----------

    function renderGallery() {

        images.forEach((img, index) => {

            img.classList.remove(
                "active",
                "middle",
                "back",
                "left",
                "right",
                "hidden"
            );


            const position =
                (index - currentIndex + images.length) %
                images.length;


            // -----------------------------
            // Global Change carousel
            // -----------------------------

            if (isGCCarousel) {

                if (position === 0) {

                    img.classList.add("active");

                }

                else if (position === 1) {

                    img.classList.add("right");

                }

                else if (
                    position === images.length - 1
                ) {

                    img.classList.add("left");

                }

                else {

                    img.classList.add("hidden");

                }

            }


            // -----------------------------
            // Pattern Library carousel
            // -----------------------------

            else {

                if (position === 0) {

                    img.classList.add("active");

                }

                else if (position === 1) {

                    img.classList.add("middle");

                }

                else if (position === 2) {

                    img.classList.add("back");

                }

                else {

                    img.classList.add("hidden");

                }

            }

        });


        // ---------- Caption ----------

        if (caption) {

            caption.textContent =
                images[currentIndex].alt;

        }


        // ---------- Counter ----------

        if (counter) {

            counter.textContent =
                currentIndex + 1;

        }


        // ---------- Lightbox ----------

        if (activeGallery === gallery) {

            updateLightbox();

        }

    }


    // ---------- Next Image ----------

    function nextImage() {

        currentIndex =
            (currentIndex + 1) % images.length;

        renderGallery();

    }


    // ---------- Previous Image ----------

    function previousImage() {

        currentIndex =
            (currentIndex - 1 + images.length) %
            images.length;

        renderGallery();

    }


    // ---------- Open Lightbox ----------

    function openLightbox() {

        activeGallery = gallery;

        document.body.classList.add(
            "lightbox-open"
        );

        lightbox.classList.remove("hidden");

        updateLightbox();

    }


    // ---------- Image Click ----------

    images.forEach(img => {

        img.addEventListener(
            "click",
            nextImage
        );

    });


    // ---------- Carousel Next Button ----------

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextImage
        );

    }


    // ---------- Expand Button ----------

    if (expandButton) {

        expandButton.addEventListener(
            "click",
            openLightbox
        );

    }


    // ---------- Initial Render ----------

    renderGallery();


    // Store navigation functions on gallery
    gallery._carousel = {
        next: nextImage,
        previous: previousImage
    };

});


// ---------- Lightbox Update ----------

function updateLightbox() {

    if (!activeGallery) return;


    const images = [
        ...activeGallery.querySelectorAll(
            ".solution-image"
        )
    ];


    const activeImage =
        activeGallery.querySelector(
            ".solution-image.active"
        );


    if (!activeImage) return;


    const currentIndex =
        images.indexOf(activeImage);


    // Reset zoom
    lightboxImage.classList.remove("zoom");


    // Update image
    lightboxImage.src =
        activeImage.src;

    lightboxImage.alt =
        activeImage.alt;


    // Update text
    lightboxCaption.textContent =
        activeImage.alt;

    lightboxCounter.textContent =
        `${currentIndex + 1} / ${images.length}`;


    // Determine tall images
    lightboxImage.onload = () => {

        const ratio =
            lightboxImage.naturalHeight /
            lightboxImage.naturalWidth;


        const wrapper =
            document.querySelector(
                ".lightbox-image-wrapper"
            );


        wrapper.classList.toggle(
            "tall-image",
            ratio > 1.8
        );

    };

}


// ---------- Lightbox Next ----------

function nextLightboxImage() {

    if (!activeGallery) return;


    if (activeGallery._carousel) {

        activeGallery._carousel.next();

    }

}


// ---------- Lightbox Previous ----------

function previousLightboxImage() {

    if (!activeGallery) return;


    if (activeGallery._carousel) {

        activeGallery._carousel.previous();

    }

}


// ---------- Close Lightbox ----------

function closeLightbox() {

    document.body.classList.remove(
        "lightbox-open"
    );

    lightbox.classList.add("hidden");

    activeGallery = null;

}


// ---------- Close Button ----------

if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeLightbox
    );

}


// ---------- Lightbox Next Button ----------

if (nextLightboxButton) {

    nextLightboxButton.addEventListener(
        "click",
        nextLightboxImage
    );

}


// ---------- Lightbox Previous Button ----------

if (prevButton) {

    prevButton.addEventListener(
        "click",
        previousLightboxImage
    );

}


// ---------- Zoom ----------

lightboxImage.addEventListener(
    "click",
    () => {

        lightboxImage.classList.toggle(
            "zoom"
        );

    }
);


// ---------- Click Outside ----------

lightbox.addEventListener(
    "click",
    e => {

        if (e.target === lightbox) {

            closeLightbox();

        }

    }
);


// ---------- Keyboard Controls ----------

document.addEventListener(
    "keydown",
    e => {

        if (
            lightbox.classList.contains(
                "hidden"
            )
        ) {

            return;

        }


        switch (e.key) {

            case "Escape":

                closeLightbox();

                break;


            case "ArrowRight":

                nextLightboxImage();

                break;


            case "ArrowLeft":

                previousLightboxImage();

                break;

        }

    }
);

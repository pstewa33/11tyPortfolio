// =====================================================
// Shared Lightbox
// =====================================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxCounter = document.getElementById("lightbox-counter");

const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextLightboxButton = document.querySelector(".lightbox-next");

let activeGallery = null;
let lightboxIndex = 0;


// =====================================================
// Gallery Initialization
// =====================================================

document.querySelectorAll(".solution-images").forEach(gallery => {

    const images = [
        ...gallery.querySelectorAll(".solution-image")
    ];

    const nextButton =
        gallery.querySelector(".image-next");

    const expandButton =
        gallery.querySelector(".image-expand");

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


    // -------------------------------------------------
    // Safety check
    // -------------------------------------------------

    if (!images.length) return;


    // -------------------------------------------------
    // Determine carousel type
    // -------------------------------------------------

    const isGCCarousel =
        gallery.classList.contains("gc-carousel");

    const isComparisonCarousel =
        gallery.classList.contains("comparison-carousel");


    // -------------------------------------------------
    // Initial Counter
    // -------------------------------------------------

    if (total) {
        total.textContent = images.length;
    }


    // =================================================
    // Render Gallery
    // =================================================

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


            // -----------------------------------------
            // Comparison carousel
            //
            // Images are side-by-side and do not use
            // the stacked carousel positioning.
            // -----------------------------------------

            if (isComparisonCarousel) {

                return;

            }


            // -----------------------------------------
            // Global Change carousel
            // -----------------------------------------

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


            // -----------------------------------------
            // Pattern Library carousel
            // -----------------------------------------

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


        // -------------------------------------------------
        // Caption
        // -------------------------------------------------

        if (caption) {
            caption.textContent =
                images[currentIndex].dataset.caption ||
                images[currentIndex].alt;
        }


        // -------------------------------------------------
        // Counter
        // -------------------------------------------------

        if (counter) {

            counter.textContent =
                currentIndex + 1;

        }


        // -------------------------------------------------
        // Update lightbox if this gallery is active
        // -------------------------------------------------

        if (activeGallery === gallery) {

            updateLightbox();

        }

    }


    // =================================================
    // Go To Image
    // =================================================

    function goToImage(index) {

        currentIndex =
            (index + images.length) % images.length;

        renderGallery();

    }


    // =================================================
    // Next Image
    // =================================================

    function nextImage() {

        goToImage(currentIndex + 1);

    }


    // =================================================
    // Previous Image
    // =================================================

    function previousImage() {

        goToImage(currentIndex - 1);

    }


    // =================================================
    // Open Lightbox
    // =================================================

    function openLightbox(index = currentIndex) {

        activeGallery = gallery;

        lightboxIndex =
            (index + images.length) % images.length;

        document.body.classList.add(
            "lightbox-open"
        );

        lightbox.classList.remove("hidden");

        updateLightbox();

    }


    // =================================================
    // Image Click
    // =================================================

    images.forEach((img, index) => {

        img.addEventListener("click", () => {

            // -----------------------------------------
            // Comparison carousel
            //
            // Clicking either image opens that exact
            // image in the lightbox.
            // -----------------------------------------

            if (isComparisonCarousel) {

                openLightbox(index);

                return;

            }


            // -----------------------------------------
            // Existing carousels
            //
            // Clicking an image advances the carousel.
            // -----------------------------------------

            nextImage();

        });

    });


    // =================================================
    // Carousel Next Button
    // =================================================

    if (nextButton) {

        nextButton.addEventListener(
            "click",
            nextImage
        );

    }


    // =================================================
    // Expand Button
    // =================================================

    if (expandButton) {

        expandButton.addEventListener(
            "click",
            () => openLightbox(currentIndex)
        );

    }


    // =================================================
    // Initial Render
    // =================================================

    renderGallery();


    // =================================================
    // Store Carousel Functions
    // =================================================

    gallery._carousel = {

        next: nextImage,

        previous: previousImage,

        goTo: goToImage,

        getCurrentIndex: () => currentIndex

    };

});


// =====================================================
// Lightbox Update
// =====================================================

function updateLightbox() {

    if (!activeGallery) return;


    const images = [
        ...activeGallery.querySelectorAll(
            ".solution-image"
        )
    ];


    if (!images.length) return;


    // Make sure the index is valid
    lightboxIndex =
        (lightboxIndex + images.length) %
        images.length;


    const activeImage =
        images[lightboxIndex];


    if (!activeImage) return;


    // -------------------------------------------------
    // Reset zoom
    // -------------------------------------------------

    lightboxImage.classList.remove("zoom");


    // -------------------------------------------------
    // Update image
    // -------------------------------------------------

    lightboxImage.src =
        activeImage.src;

    lightboxImage.alt =
        activeImage.alt;


    // -------------------------------------------------
    // Update caption
    // -------------------------------------------------
        lightboxCaption.textContent =
            activeImage.dataset.caption ||
            activeImage.alt;
    // -------------------------------------------------
    // Update counter
    // -------------------------------------------------

    lightboxCounter.textContent =
        `${lightboxIndex + 1} / ${images.length}`;


    // -------------------------------------------------
    // Determine image height
    // -------------------------------------------------

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


// =====================================================
// Lightbox Next
// =====================================================

function nextLightboxImage() {

    if (!activeGallery) return;


    const images =
        activeGallery.querySelectorAll(
            ".solution-image"
        );


    if (!images.length) return;


    lightboxIndex =
        (lightboxIndex + 1) % images.length;


    // Keep the underlying carousel in sync
    if (activeGallery._carousel) {

        activeGallery._carousel.goTo(
            lightboxIndex
        );

    }


    updateLightbox();

}


// =====================================================
// Lightbox Previous
// =====================================================

function previousLightboxImage() {

    if (!activeGallery) return;


    const images =
        activeGallery.querySelectorAll(
            ".solution-image"
        );


    if (!images.length) return;


    lightboxIndex =
        (lightboxIndex - 1 + images.length) %
        images.length;


    // Keep the underlying carousel in sync
    if (activeGallery._carousel) {

        activeGallery._carousel.goTo(
            lightboxIndex
        );

    }


    updateLightbox();

}


// =====================================================
// Close Lightbox
// =====================================================

function closeLightbox() {

    document.body.classList.remove(
        "lightbox-open"
    );

    lightbox.classList.add("hidden");

    activeGallery = null;

    lightboxIndex = 0;

}


// =====================================================
// Close Button
// =====================================================

if (closeButton) {

    closeButton.addEventListener(
        "click",
        closeLightbox
    );

}


// =====================================================
// Lightbox Next Button
// =====================================================

if (nextLightboxButton) {

    nextLightboxButton.addEventListener(
        "click",
        nextLightboxImage
    );

}


// =====================================================
// Lightbox Previous Button
// =====================================================

if (prevButton) {

    prevButton.addEventListener(
        "click",
        previousLightboxImage
    );

}


// =====================================================
// Zoom
// =====================================================

if (lightboxImage) {

    lightboxImage.addEventListener(
        "click",
        () => {

            lightboxImage.classList.toggle(
                "zoom"
            );

        }
    );

}


// =====================================================
// Click Outside Lightbox
// =====================================================

if (lightbox) {

    lightbox.addEventListener(
        "click",
        e => {

            if (e.target === lightbox) {

                closeLightbox();

            }

        }
    );

}


// =====================================================
// Keyboard Controls
// =====================================================

document.addEventListener(
    "keydown",
    e => {

        if (
            !lightbox ||
            lightbox.classList.contains("hidden")
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

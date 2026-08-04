document.querySelectorAll(".solution-images").forEach(container => {

    const images = container.querySelectorAll(".solution-image");

    images.forEach(image => {

        image.addEventListener("click", () => {

            images.forEach(img => img.classList.remove("active"));
            image.classList.add("active");

        });

    });

});
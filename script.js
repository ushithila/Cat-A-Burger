function scrollSlider(direction) {
    const container = document.getElementById("sliderContainer");
    const scrollAmount = 200;

    if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
}

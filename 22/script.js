const images = [
  "https://picsum.photos/200/300?random=1",
  "https://picsum.photos/200/300?random=2",
  "https://picsum.photos/200/300?random=3",
  "https://picsum.photos/200/300?random=4",
  "https://picsum.photos/200/300?random=5",
];
let currentIndex = 0;

const sliderImage = document.querySelector(".slider-image");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const dots = document.querySelectorAll(".dot");

function updateSlider() {
  sliderImage.src = images[currentIndex];
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

prevButton.addEventListener("click", showPrevImage);
nextButton.addEventListener("click", showNextImage);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

updateSlider();

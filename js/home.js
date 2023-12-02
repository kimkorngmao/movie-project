const images = [
  "../image/home/image-slide-1.jpg",
  "../image/home/image-slide-2.jpg",
  "../image/home/image-slide-3.jpg",
  "../image/home/image-slide-4.jpg",
  "../image/home/image-slide-5.jpg"
];

const slideImagePreview = document.getElementById("slide-image-preview");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const imageDots = document.getElementById("image-dots");
let imageIndex = 0;
let intervalId;

function updateImage() {
  slideImagePreview.style.backgroundImage = `url('${images[imageIndex]}')`;
  updateImageDots();
}

function createImageDots() {
  images.forEach((image, i) => {
    const dot = document.createElement("li");
    dot.className = "image-dot";
    dot.addEventListener("click", () => {
      clearInterval(intervalId);
      imageIndex = i;
      updateImage();
      intervalId = setInterval(nextImage, 5000);
    });
    imageDots.appendChild(dot);
  });
}

function updateImageDots() {
  const dots = document.querySelectorAll(".image-dot");
  dots.forEach((dot, i) => {
    if (i === imageIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function nextImage() {
  imageIndex = (imageIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  imageIndex = (imageIndex - 1 + images.length) % images.length;
  updateImage();
}

prevBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  prevImage();
  intervalId = setInterval(nextImage, 5000);
});

nextBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  nextImage();
  intervalId = setInterval(nextImage, 5000);
});

// Initialize the slideshow and image dots
createImageDots();
updateImage();

// Automatic slideshow every 2 seconds
intervalId = setInterval(() => {
  nextImage();
}, 3000);

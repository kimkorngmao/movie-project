const images = [
  "https://i.ytimg.com/vi/k5aVcHpl_Xw/maxresdefault.jpg",
  "https://i0.wp.com/blog.son-video.com/wp-content/uploads/2021/03/ZackSnyders_JusticeLeague_1200.jpg?fit=1200%2C675&ssl=1",
  "https://wallpapersmug.com/download/1600x900/cce793/movie-poster-of-john-wick-3.jpg",
  "https://images.hdqwalls.com/wallpapers/john-wick-chapter-2-2017-artwork-poster-ap.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fe3LsgY9ZVJZsyKHoMLFnzvpwhNnrUIhHP4MYUL4eq7qmJ0Zzm8V6aNJ-NS7L_LYD4o&usqp=CAU"
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
}, 2000);

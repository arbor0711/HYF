// Navbar menu

// const toggler = document.querySelector("#toggler");

// const collapse = () => {
//   console.log("clicked");
//   const navbarList = document.querySelector("#list");
//   console.log(navbarList);
//   navbarList.classList.toggle("collapsible");
// };

// toggler.addEventListener("click", collapse);

// Hero img
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const sliderRight = document.querySelector("#sliderButtonRight");
const sliderLeft = document.querySelector("#sliderButtonLeft");

const slider = () => {
  // TODO: we should add id="hero__img" to image
  const heroImg = document.querySelector("#heroImg");

  console.log(heroImg.src);
};

slider();

imgArrowRight.addEventListener("click", slider);
imgArrowLeft.addEventListener("click", slider);

// carousel use it for automatic changing pic
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const heroImage = document.querySelector(".hero-image");
const slider = document.querySelector(".slider");
let currentIndex = 0;

function updateImage(index) {
  heroImage.src = images[index];
  slider.value = index;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage(currentIndex);
}

setInterval(nextImage, 3000);

slider.addEventListener("input", () => {
  currentIndex = parseInt(slider.value);
  updateImage(currentIndex);
});

updateImage(currentIndex);

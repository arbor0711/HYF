// Navbar menu

const toggler = document.querySelector("#toggler");

const collapse = () => {
  console.log("clicked");
  const navbarList = document.querySelector("#list");
  console.log(navbarList);
  navbarList.classList.toggle("collapsible");
};

toggler.addEventListener("click", collapse);

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
const sliderRight = document.querySelector("#sliderButtonRight");
const sliderLeft = document.querySelector("#sliderButtonLeft");

const slider = () => {
  // TODO: we should add id="hero__img" to image
  const heroImg = document.querySelector("#heroImg");

  console.log(heroImg.src);
};

// slider();
const banners = [
  {
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`",
    title: "Unlock Your Potential",
    text: "Join Our Personal Development Workshop Today!",
  },
  {
    img: "https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`",
    title: "Master Your Skills",
    text: "Attend Our Professional Development Seminar!",
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`",
    title: "Invest in Your Future",
    text: "Learn from the Experts at Our Career Growth Workshop!",
  },
];

const bannerImage = document.getElementById("heroImg");
const bannerTitle = document.querySelector(".hero-title");
const bannerText = document.querySelector(".hero-text");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let index = 0;
bannerImage.src = `${banners[0].img}`;
bannerTitle.innerText = `${banners[0].title}`;
bannerText.innerText = `${banners[0].text}`;

function changeImage(newIndex) {
  bannerImage.src = `${banners[newIndex].img}`;
  bannerTitle.innerText = `${banners[newIndex].title}`;
  bannerText.innerText = `${banners[newIndex].text}`;
  prevBtn.addEventListener("click", onPrevClick);
  nextBtn.addEventListener("click", onNextClick);
  index = newIndex;
}

function onNextClick() {
  let newIndex = index + 1;
  if (newIndex === banners.length) {
    newIndex = 0;
  }
  changeImage(newIndex);
}

function onPrevClick() {
  let newIndex = index - 1;
  if (newIndex === -1) {
    newIndex = banners.length - 1;
  }
  changeImage(newIndex);
}

setInterval(onNextClick, 6000);

// Scroll To Top Button

let scrollToTopBtn = document.querySelector("#scrollToTopBtn");
scrollToTopBtn.addEventListener("click", scrollToTop);
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};
// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 10);
  }
}

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
// const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
// const sliderRight = document.querySelector("#sliderButtonRight");
// const sliderLeft = document.querySelector("#sliderButtonLeft");

// const slider = () => {
//   // TODO: we should add id="hero__img" to image
//   const heroImg = document.querySelector("#heroImg");

//   console.log(heroImg.src);
// };

// slider();
const banners = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
    title: "title1",
    text: "it is related to title1",
  },
  {
    img: "https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg",
    title: "title2",
    text: "it is related to title2",
  },
  {
    img: "https://www.searchenginejournal.com/wp-content/uploads/2022/06/bing-filter-search2-62c6eae862f5f-sej.png",
    title: "title3",
    text: "it is related to title3",
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

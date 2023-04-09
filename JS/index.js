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
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
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

// events
const events = [
  {
    name: "Data Science Summit",
    location: "Utrecht, Netherlands",
    img: `https://images.unsplash.com/photo-1561489396-888724a1543d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    date: "June 7-8, 2023",
  },
  {
    name: "DevOpsCon Amsterdam",
    location: "Amsterdam, Netherlands",
    img: `https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    date: "November 29 - December 2, 2023",
  },
  {
    name: "Agile and Software Architecture Symposium",
    location: "Amsterdam, Netherlands",
    img: `https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    date: "June 6-7, 2023",
  },
  {
    name: "Frontend Love Conference",
    location: "Rotterdam, Netherlands",
    img: `https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    date: "June 21, 2023",
  },
  {
    name: "Blockchain Innovation Conference",
    location: "Rotterdam, Netherlands",
    img: `https://images.unsplash.com/photo-1600320844678-43cebba1cdfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
    date: "May 17-18, 2023",
  },
  {
    name: "Cloud Expo Europe",
    location: "The Hague, Netherlands",
    img: `https://images.unsplash.com/photo-1582192730841-2a682d7375f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
    date: "November 29-30, 2023",
  },
  {
    name: "DevOps Summit",
    location: "Rotterdam, Netherlands",
    img: `https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    date: "September 12-13, 2023",
  },
  {
    name: "Digital Marketing Conference",
    location: "The Hague, Netherlands",
    img: `https://images.unsplash.com/photo-1560439514-e960a3ef5019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    date: "June 20-21, 2023",
  },
  {
    name: "E-commerce Expo",
    location: "Rotterdam, Netherlands",
    img: `https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
    date: "April 26-27, 2023",
  },
  {
    name: "European Women in Technology Conference",
    location: "Amsterdam, Netherlands",
    img: `https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    date: "November 15-16, 2023",
  },
  {
    name: "Global Cybersecurity Summit",
    location: "The Hague, Netherlands",
    img: `https://images.unsplash.com/photo-1558008258-3256797b43f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80`,
    date: "October 24-25, 2023",
  },
  {
    name: "Hackathon Rotterdam",
    location: "Rotterdam, Netherlands",
    img: `https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`,
    date: "August 5-6, 2023",
  },
  {
    name: "IT & Information Security Summit",
    location: "The Hague, Netherlands",
    img: `https://images.unsplash.com/photo-1571645163064-77faa9676a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    date: "March 15-16, 2023",
  },
  {
    name: "JavaDay Rotterdam",
    location: "Rotterdam, Netherlands",
    img: `https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    date: "July 11-12, 2023",
  },
  {
    name: "Lean Startup Summit",
    location: "The Hague, Netherlands",
    img: `https://images.unsplash.com/photo-1659301254614-8d6a9d46f26a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80`,
    date: "May 23-24, 2023",
  },
];
const section = document.createElement("section");
const anchor = document.createElement("a");
const div = document.createElement("div");
const img = document.createElement("img");
const eventInfo = document.createElement("div");
const h3 = document.createElement("h3");
const p = document.createElement("p");
const courseCardsContainer = document.querySelector(".course-cards-container");

section.classList.add("course-card");
section.classList.add("card");

// TODO:
for (event of events) {
  const section = document.createElement("section");
  const anchor = document.createElement("a");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const eventInfo = document.createElement("div");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const courseCardsContainer = document.querySelector(
    ".course-cards-container"
  );

  section.classList.add("course-card");
  section.classList.add("card");
  img.src = event.img;
  h3.innerText = event.name;
  p.innerText = event.location + ", " + event.date;
  courseCardsContainer.appendChild(section);
  section.appendChild(anchor);
  anchor.appendChild(div);
  div.appendChild(img);
  div.appendChild(eventInfo);
  eventInfo.appendChild(h3);
  eventInfo.appendChild(p);

  anchor.href = "#";
  eventInfo.classList.add("img-title");
}

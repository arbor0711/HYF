const toggler = document.querySelector("#toggler");

const collapse = () => {
  console.log("clicked");
  const navbarList = document.querySelector("#list");
  console.log(navbarList);
  navbarList.classList.toggle("collapsible");
};

toggler.addEventListener("click", collapse);

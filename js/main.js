// add class by media function
let addClassMedia = (size, hash, cls) => {
  if (window.matchMedia(`(max-width: ${size}px)`).matches) {
    if (document.querySelector(`${hash}`)) {
      document.querySelector(`${hash}`).classList.add(`${cls}`);
    }
  }
};

// remove class by media function
let removeClassMedia = (size, hash, cls) => {
  if (window.matchMedia(`(max-width: ${size}px)`).matches) {
    if (document.querySelector(`${hash}`)) {
      document.querySelector(`${hash}`).classList.remove(`${cls}`);
    }
  }
};

// side bar get ready function
let sidebar_function = () => {
  let usernav = document.querySelector(".side-nav");
  let sidenavBtn = document.querySelector(".navbar .nav-buttons .bars-button");
  let closeNavBtn = document.createElement("div");

  // open side nav function
  openNav = () => {
    usernav.classList.add("active");
    closeNavBtn.classList.add("active");
  };

  // add event to them
  sidenavBtn.addEventListener("click", () => openNav());

  // get close side nav btn ready
  closeNavBtn.classList.add("close-nav");
  document.querySelector("body").appendChild(closeNavBtn);
  closeNavBtn.addEventListener("click", () => {
    usernav.classList.remove("active");
    closeNavBtn.classList.remove("active");
  });
};

$(document).ready(function () {
  // add class side-nav to navbar
  addClassMedia(992, "#nav-links", "side-nav");

  // side function call
  sidebar_function();


  // owl get ready
  $(".hero-section .owl-carousel").owlCarousel({
    items: 1,
    rtl: true,
    dots: false,
    lazyLoad: true,
  });
});

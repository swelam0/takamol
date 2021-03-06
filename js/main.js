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
  document.querySelector("nav").appendChild(closeNavBtn);
  closeNavBtn.addEventListener("click", () => {
    usernav.classList.remove("active");
    closeNavBtn.classList.remove("active");
  });
};

$(document).ready(function () {
  // add class side-nav to navbar
  addClassMedia(992, "#nav-links", "side-nav");

  // nav bar scroll fuction
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll >= 600) {
      document.querySelector("nav").classList.add("scroll-style");
    } else {
      document.querySelector("nav").classList.remove("scroll-style");
    }
  });

  // side function call
  sidebar_function();

  // owl get ready
  $(".hero-section .owl-carousel").owlCarousel({
    items: 1,
    rtl: true,
    dots: false,
    lazyLoad: true,
  });

  $(".blog-section .owl-carousel").owlCarousel({
    margin: 15,
    rtl: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".clients-section .owl-carousel").owlCarousel({
    margin: 15,
    loop: true,
    rtl: true,
    lazyLoad: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});

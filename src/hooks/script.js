const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  };
  
  const toggleNavbar = function () {
    const navbar = document.querySelector("[data-navbar]");
    const navToggler = document.querySelector("[data-nav-toggler]");
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
  };
  
  const closeNavbar = function () {
    const navbar = document.querySelector("[data-navbar]");
    const navToggler = document.querySelector("[data-nav-toggler]");
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
  };
  
  export { addEventOnElem, toggleNavbar, closeNavbar };
  
// Dropdown Menu

function toggleMenu() {
    var menu = document.getElementById('global-nav-mobile-menu');
    var wrap = document.getElementById('wrap-page');
    if (menu.attributes['aria-hidden'].value == "false") {
      menu.style.transform = "translateY(-100%)";
      menu.attributes['aria-hidden'].value = "true";
      wrap.style.opacity = "0";
      wrap.style.zIndex = "-1";
    } else {
      menu.style.transform = "translateY(0)";
      menu.attributes['aria-hidden'].value = "false";
      wrap.style.opacity = "0.5";
      wrap.style.zIndex = "8";
    }
  }
  
  function closeMenu() {
    var menu = document.getElementById('global-nav-mobile-menu');
    var wrap = document.getElementById('wrap-page');
    menu.style.transform = "translateY(-100%)";
    menu.attributes['aria-hidden'].value = "true";
    wrap.style.opacity = "0";
    wrap.style.zIndex = "-1";
  }
  
  function closeMenuOnWide(check) {
    var menu = document.getElementById('global-nav-mobile-menu');
    var wrap = document.getElementById('wrap-page');
    if (check.matches) {
      menu.style.transform = "translateY(-100%)";
      menu.attributes['aria-hidden'].value = "true";
      wrap.style.opacity = "0";
      wrap.style.zIndex = "-1";
    }
  }
  
  var check = window.matchMedia("(min-width: 768px)");
  closeMenuOnWide(check);
  check.addListener(closeMenuOnWide);
  

  // Back to Top Button
  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
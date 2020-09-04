console.log("hii")
function menu() {
    var showNav = document.querySelector(".nav");
    showNav.classList.toggle("show");
    var a = Array.from(document.querySelectorAll(".show a"));
    a.forEach((rem) => {
      rem.addEventListener("click", () => {
        showNav.classList.remove("show");
      });
    });
  };
  window.addEventListener("scroll", () => {
    let navbar = document.getElementById("navbar-example2");
    if (window.pageYOffset > 90) {
      navbar.style.background = "white";
      navbar.style.boxShadow = "0 8px 25px 0 rgba(0,0,0,.1)";
      navbar.classList.add("nav-change");
    } else {
      navbar.style.background = "none";
      navbar.style.boxShadow = "none";
    }
  });
 
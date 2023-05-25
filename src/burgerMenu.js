import "./style.css";

const menuBtn = document.querySelector("#burger_icon");
let menuOpen = false;

const menuLinks = document.querySelector("#burger_links");

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuLinks.style.display = "block";
  } else {
    menuLinks.style.display = "none";
  }
});

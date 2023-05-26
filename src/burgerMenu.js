import "./style.css";

/* Toggle mellem at åbne og lukke burgermenuen */
const menuBtn = document.querySelector("#burger_icon");
const menuLinks = document.querySelector("#burger_links");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("hidden");
  menuBtn.classList.toggle("change");
});

/* Toggler mellem at åbne og lukke behandlingserne (så man kan se zoneterapi, japansk lifting osv.) */
const treatmentLink = document.querySelector("#behandling_link");
const treatmentBox = document.querySelector("#behandlings_boks");

treatmentLink.addEventListener("click", () => {
  treatmentBox.classList.toggle("hidden");
});

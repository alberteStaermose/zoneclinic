import "./style.css";

let isAnimating = false;

function scrollLeftAnimate(elem, unit) {
  if (!elem || isAnimating) {
    //if element not found / if animating, do not execute slide
    return;
  }

  const time = 300; // animation duration in MS, the smaller the faster.
  const from = elem.scrollLeft; // to continue the frame posistion
  const aframe = 10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)
  isAnimating = true; //if animating prevent double trigger animation

  let start = new Date().getTime(),
    timer = setInterval(function () {
      let step = Math.min(1, (new Date().getTime() - start) / time);
      elem.scrollLeft = step * unit + from;
      if (step === 1) {
        clearInterval(timer);
        isAnimating = false;
      }
    }, aframe);
}

function initDealCarrousel(dealCarrouselID) {
  const target = document.querySelector("#" + dealCarrouselID + " #carrousel_flexbox");
  let cardOutterWidth;
  let maxCarrouselScroll;

  function updateUpaCarrouselInfo() {
    cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .card").offsetWidth; //you can define how far the scroll
    maxCarrouselScroll = document.querySelectorAll("#" + dealCarrouselID + " .card").length * cardOutterWidth - document.querySelector("#" + dealCarrouselID + " #carrousel_flexbox").clientWidth;
  }

  document.querySelector("#" + dealCarrouselID + " #scroll_left").addEventListener("click", () => {
    updateUpaCarrouselInfo(); //in case window resized, will get new info
    if (target.scrollLeft > 0) {
      scrollLeftAnimate(target, -cardOutterWidth * 2);
    }
  });

  document.querySelector("#" + dealCarrouselID + " #scroll_right").addEventListener("click", () => {
    updateUpaCarrouselInfo(); //in case window resized, will get new info
    if (target.scrollLeft < maxCarrouselScroll) {
      scrollLeftAnimate(target, cardOutterWidth * 2);
    }
  });
}
// Initiate the container with ID
initDealCarrousel("container"); //carrousel ID

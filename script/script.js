document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
});

gsap.fromTo(".fleche", { y: 10 }, { y: 30, repeat: -1, yoyo: true });

let animYeux = document.querySelector(".debut");

window.addEventListener("scroll", () => {
  setTimeout(() => {
    animYeux.style.animationPlayState = "paused";
    document.querySelector("body").classList.remove("is-scrolling");
  }, 100);
  animYeux.style.animationPlayState = "running";
  document.querySelector("body").classList.add("is-scrolling");
});

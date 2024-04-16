gsap.fromTo(".fleche", { y: 10 }, { y: 30, repeat: -1, yoyo: true });

let animYeux = document.querySelector(".debut");
let animGhost = document.querySelector("#ghost");

window.addEventListener("scroll", () => {
  setTimeout(() => {
    animYeux.style.animationPlayState = "paused";
    animGhost.style.animationPlayState = "paused";
    document.querySelector("body").classList.remove("is-scrolling");
  }, 100);
  document.querySelector("body").classList.add("is-scrolling");
  animYeux.style.animationPlayState = "running";
  animGhost.style.animationPlayState = "running";
});

/*
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
});

GSDevTools.create();
*/

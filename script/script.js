gsap.fromTo(".fleche", { y: 10 }, { y: 30, repeat: -1, yoyo: true });

let animYeux = document.querySelector(".debut");
let animGhost = document.querySelector("#ghost");
let animGhost2 = document.querySelector("#ghost-big");

window.addEventListener("scroll", () => {
  setTimeout(() => {
    animYeux.style.animationPlayState = "paused";
    animGhost.style.animationPlayState = "paused";
    animGhost2.style.animationPlayState = "paused";
    document.querySelector("body").classList.remove("is-scrolling");
  }, 100);
  document.querySelector("body").classList.add("is-scrolling");
  animYeux.style.animationPlayState = "running";
  animGhost.style.animationPlayState = "running";
  animGhost2.style.animationPlayState = "running";
});

/*
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
});

GSDevTools.create();
*/

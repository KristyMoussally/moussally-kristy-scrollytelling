document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
});

gsap.fromTo(".fleche", { y: 10 }, { y: 30, repeat: -1, yoyo: true });

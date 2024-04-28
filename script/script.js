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

gsap
  .timeline()
  .fromTo(
    animYeux,
    { opacity: "100%", width: 462 },
    { opacity: 0, scale: 0, duration: 5 }
  )
  .fromTo(
    animGhost,
    { opacity: 0 },
    { opacity: "100%", width: "35%", duration: 5 },
    "<0"
  )
  .fromTo(
    animGhost,
    { opacity: "100%", width: "35%" },
    { scale: 0, opacity: 0, duration: 5 },
    4
  )
  .fromTo(
    ".yeux-fille-ferme",
    { opacity: 0 },
    { opacity: "100%", duration: 5 },
    6
  )
  .fromTo(
    ".goutte",
    { display: "none", opacity: 0 },
    { opacity: "100%", display: "block", duration: 5 },
    "<0"
  )
  .fromTo(
    ".g1",
    { y: 0, opacity: "100%" },
    { y: "100%", opacity: 0, repeat: -1, duration: 4 },
    "<0"
  )
  .fromTo(
    ".g2",
    { y: 0, opacity: "100%" },
    { y: "80%", opacity: 0, repeat: -1, duration: 4 },
    6.5
  )
  .fromTo(
    ".g3",
    { y: 0, opacity: "100%" },
    { y: "50%", opacity: 0, repeat: -1, duration: 4 },
    7
  )
  .to(".yeux-fille-ferme", { opacity: 0, duration: 5 }, 8)
  .fromTo(
    ".yeux-fille-ouvert",
    { opacity: 0 },
    { opacity: "100%", duration: 5 },
    "<0"
  );

gsap
  .timeline()
  .to(".fille-coucher", { opacity: 0, duration: 3 })
  .fromTo(".fille-debout", { opacity: 0 }, { opacity: "100%", duration: 4 }, 1)
  .fromTo(
    ".fille-debout",
    { x: 0 },
    { x: "10%", repeat: -1, yoyo: true, duration: 4 },
    "<0"
  );

gsap
  .timeline()

  .to(".regard-droit", { display: "none", duration: 3 })

  .to(".wagon-coin", { display: "none", duration: 3 }, "<0")
  .to(".porte-fond", { display: "block", opacity: "100%", duration: 3 }, "<0")
  .to(".porte", { display: "block", opacity: "100%", duration: 2 }, 3)
  .fromTo(
    ".ghost-porte",
    { display: "block", y: "100%" },
    { display: "block", y: 0, opacity: "100%", duration: 2 },
    3
  )
  .to(".ghost-porte", { x: "10%", yoyo: true, repeat: -1, duration: 1 }, 3)
  .fromTo(
    ".bruitage",
    { scale: 0, opacity: 0 },
    {
      scaleX: "80%",
      scaleY: "80%",
      opacity: "100%",
      stagger: 2,
      ease: "bounce",
      duration: 1,
    },
    3
  )
  .to(".porte-fond", { display: "none", duration: 5 }, 7)
  .to(".porte", { display: "none", duration: 5 }, 7)
  .to(".ghost-porte", { display: "none", duration: 5 }, 7)
  .to(".bruitage", { display: "none", duration: 5 }, 7)
  .to(".wagon-coin", { display: "block", duration: 20 }, 12)
  .to(".regard-gauche", { display: "block", opacity: "100%", duration: 5 }, 12)
  .to(".regard-gauche", { display: "none", duration: 5 }, 14)
  .to(".wagon-coin", { display: "none", opacity: 0, duration: 3 }, "<0")
  .to(".porte-fond", { display: "block", duration: 5 }, "<0")
  .to(".porte", { display: "block", duration: 5 }, 20)
  .fromTo(
    ".bras-fille",
    { opacity: 0, x: 0 },
    { opacity: "100%", x: "50%", duration: 5 },
    20
  );

gsap.to(".paper", { y: "100%", duration: 10 });

gsap.to(".cube", { rotate: 360, repeat: -1, ease: "none", duration: 4 });
gsap.fromTo(
  ".train-jouet",
  { x: 0 },
  { x: "50%", repeat: -1, yoyo: true, ease: "power1", duration: 4 }
);
gsap.fromTo(
  ".peluche",
  { scaleX: "90%" },
  { scaleX: "100%", repeat: -1, yoyo: true, ease: "bounce", duration: 4 }
);
gsap.fromTo(
  ".note-musique",
  { skewX: "9%", y: 0 },
  { skewX: "15%", repeat: -1, yoyo: true, y: "10%", duration: 2 }
);

/*
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
});

GSDevTools.create();
*/

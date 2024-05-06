/*-------------------------------------------------------------------------------------
  # APPEL AU PLUGIN GSAP
  -------------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(
    MotionPathPlugin,
    DrawSVGPlugin,
    MorphSVGPlugin,
    ScrollTrigger
  );
});

/*-------------------------------------------------------------------------------------
  # HEARDER
  -------------------------------------------------------------------------------------*/

gsap
  .timeline()
  .to("#circle", {
    morphSVG: "#fleche",
    duration: 1.5,
  })
  .fromTo("#circle", { y: 10 }, { y: 30, repeat: -1, yoyo: true });

/*-------------------------------------------------------------------------------------
  # SPRITESHEET
  -------------------------------------------------------------------------------------*/

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

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 1
  -------------------------------------------------------------------------------------*/

const timeChp1 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: false,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp01",
    toggleActions: "restart complete reverse reset",
  },
});

timeChp1.pause();

timeChp1
  .fromTo(
    animYeux,
    {
      opacity: "100%",
      width: 462,
    },
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
  )
  .paused(true);

timeChp1.fromTo(
  ".progres",
  {
    drawSVG: "0% 0%",
  },
  {
    drawSVG: "0% 100%",
    duration: 15,
    ease: "power1",
  },
  0
);

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 2
  -------------------------------------------------------------------------------------*/

const timeChp2 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: false,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp02",
  },
});

timeChp2.pause();

timeChp2
  .to(".fille-coucher", { opacity: 0, duration: 3 })
  .fromTo(".fille-debout", { opacity: 0 }, { opacity: "100%", duration: 4 }, 1)
  .fromTo(
    ".fille-debout",
    { x: 0 },
    { x: "10%", repeat: -1, yoyo: true, duration: 4 },
    "<0"
  )
  .paused(true);

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 3
  -------------------------------------------------------------------------------------*/

const timeChp3 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: false,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp03",
    toggleActions: "play complete none reset",
  },
});

timeChp3.pause();

timeChp3
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
  )
  .paused(true);

timeChp2.fromTo(
  ".progres",
  {
    drawSVG: "0% 0%",
  },
  {
    drawSVG: "0% 100%",
    duration: 30,
    ease: "power1",
  },
  0
);

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 4
  -------------------------------------------------------------------------------------*/

const timeChp4 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: 1,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp04",
  },
});

timeChp4.pause();

timeChp4
  .to(".paper", { y: "-100vh", ease: "none" })
  .to(".v1", { y: "100vh", ease: "none" }, "<0")
  .paused(true);
/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 4-5
  -------------------------------------------------------------------------------------*/

const timeChp4_5 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: false,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp04-5",
  },
});

gsap.to(".train-jouet", {
  motionPath: {
    align: ".trace",
    path: ".trace",
  },
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "power1",
});

gsap.to(".cube", { rotate: 360, repeat: -1, ease: "none", duration: 4 });

gsap.fromTo(
  ".peluche",
  { scaleX: "90%" },
  { scaleX: "100%", repeat: -1, yoyo: true, ease: "bounce", duration: 4 }
);

timeChp4_5
  .fromTo(
    ".fille-joue-block ",
    { opacity: 0 },
    { opacity: "100%", duration: 1 }
  )
  .to(
    ".fille-joue-block ",
    {
      opacity: "50%",
      repeat: -1,
      ease: "power1",
      yoyo: true,
      duration: 2,
    },
    "<0"
  )
  .fromTo(
    ".fille-joue-peluche ",
    { opacity: 0 },
    { opacity: "100%", duration: 1 }
  )
  .to(
    ".fille-joue-peluche ",
    {
      opacity: "50%",
      repeat: -1,
      ease: "power1",
      yoyo: true,
      duration: 2,
    },
    "<1"
  )
  .fromTo(".fille-curieuse", { opacity: 0 }, { opacity: "100%", duration: 1 })
  .to(
    ".fille-curieuse ",
    {
      opacity: "50%",
      repeat: -1,
      ease: "power1",
      yoyo: true,
      duration: 2,
    },
    "<0"
  )
  .fromTo(
    ".fille-curieuse ",
    { y: "10%" },
    {
      y: 0,
      yoyo: true,
      repeat: -1,
      ease: "power1",
      duration: 2,
    },
    "<0"
  )
  .fromTo(".mere-assise", { opacity: 0 }, { opacity: "100%", duration: 1 })
  .to(
    ".fille-curieuse ",
    {
      opacity: 0,
      duration: 2,
      display: "none",
    },
    10
  )
  .to(
    ".fille-joue-block",
    {
      opacity: 0,
      duration: 2,
      display: "none",
    },
    10
  )
  .to(
    ".fille-joue-peluche",
    {
      opacity: 0,
      display: "none",
      duration: 2,
    },
    10
  )
  .to(
    ".mere-assise",
    {
      opacity: 0,
      display: "none",
      duration: 2,
    },
    10
  )
  .fromTo(
    "#fille-cours",
    { opacity: 0, display: "none", x: "-100vw" },
    {
      x: "100vw",
      opacity: "100%",
      display: "block",
      duration: 5,
    },
    10
  )
  .paused(true);

timeChp4_5
  .fromTo(
    ".progres",
    {
      drawSVG: "0% 0%",
    },
    {
      drawSVG: "0% 100%",
      duration: 15,
      ease: "power1",
    },
    0
  )
  .paused(true);

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 5
  -------------------------------------------------------------------------------------*/

const speed = 100;

const timeChp5 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp05",
  },
});

timeChp5
  .to(".v2", { y: "250%", ease: "none" }, "<0")
  .to(
    ".c1",
    {
      y: -5 * speed,
      ease: "power1.in",
    },
    0.06
  )
  .to(".c2", { y: -100 * speed, ease: "power1.in" }, 0.03)
  .to(".c3", { y: -10 * speed }, 0.05)
  .to(".peluche-tombe", { y: 5 * speed }, 0.02)
  .to(".train-tombe", { y: 20 * speed }, 0.03);

gsap.to(".cube-tombe", {
  rotate: 360,
  repeat: -1,
  ease: "none",
  duration: 5,
});

gsap.to(".peluche-tombe", {
  rotate: 360,
  repeat: -1,
  ease: "none",
  duration: 2,
});

gsap.to(".train-tombe", {
  rotate: 360,
  repeat: -1,
  ease: "none",
  duration: 3,
});

gsap.to(".etoile-tombe", {
  rotate: 360,
  repeat: -1,
  ease: "none",
  duration: 10,
});

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 5-5
  -------------------------------------------------------------------------------------*/

const timeChp5_5 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: false,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp05-5",
  },
});

timeChp5_5
  .fromTo(".fille-chante", { opacity: 0 }, { opacity: "100%", duration: 1 })
  .to(
    ".fille-chante",
    {
      opacity: "50%",
      repeat: -1,
      ease: "power1",
      yoyo: true,
      duration: 2,
    },
    "<0"
  )
  .fromTo(".fille-livre", { opacity: 0 }, { opacity: "100%", duration: 1 })
  .to(
    ".fille-livre",
    {
      opacity: "50%",
      repeat: -1,
      ease: "power1",
      yoyo: true,
      duration: 2,
    },
    "<1"
  )
  .fromTo(".fille-devoir", { opacity: 0 }, { opacity: "100%", duration: 1 })
  .to(
    ".fille-devoir",
    {
      opacity: "50%",
      repeat: -1,
      ease: "power1",
      yoyo: true,
      duration: 2,
    },
    "<0"
  )
  .fromTo(".mere-lit", { opacity: 0 }, { opacity: "100%", duration: 1 })
  .to(
    ".fille-devoir",
    {
      opacity: 0,
      duration: 2,
      display: "none",
    },
    10
  )
  .to(
    ".fille-livre",
    {
      opacity: 0,
      duration: 2,
      display: "none",
    },
    10
  )
  .fromTo(
    ".dessin-corps",
    {
      drawSVG: "0% 0%",
    },
    {
      drawSVG: "0% 100%",
      duration: 1,
    }
  )
  .fromTo(
    ".dessin-trait",
    {
      drawSVG: "0% 0%",
    },
    {
      drawSVG: "0% 100%",
      duration: 1,
    }
  )
  .to(
    ".fille-chante",
    {
      opacity: 0,
      display: "none",
      duration: 2,
    },
    10
  )
  .to(
    ".mere-lit",
    {
      opacity: 0,
      display: "none",
      duration: 2,
    },
    10
  )
  .fromTo(
    "#fille-cours",
    { opacity: 0, display: "none", x: "-100vw" },
    {
      x: "100vw",
      opacity: "100%",
      display: "block",
      duration: 5,
    },
    10
  )
  .paused(true);

timeChp5_5
  .fromTo(
    ".progres",
    {
      drawSVG: "0% 0%",
    },
    {
      drawSVG: "0% 100%",
      duration: 15,
      ease: "power1",
    },
    0
  )
  .paused(true);

gsap.fromTo(
  ".note-musique",
  { skewX: "9%", y: 0 },
  { skewX: "15%", repeat: -1, yoyo: true, y: "10%", duration: 2 }
);

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 6
  -------------------------------------------------------------------------------------*/

const timeChp6 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp06",
  },
});

timeChp6.to(".bras-fille-porte-fin", {
  x: "50%",
  y: "-20%",
  rotate: "20%",
  duration: 3,
});

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 7
  -------------------------------------------------------------------------------------*/

const timeChp7 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp07",
  },
});

timeChp7
  .to(".bras-fille-train", {
    x: "-20%",
    y: "-20%",
    scale: 1.3,
    duration: 3,
  })
  .to(".bras-fille-train", {
    y: "10%",
    x: "30%",
    scale: 0.7,
    duration: 3,
  });

timeChp7.to(
  ".train",
  {
    y: "-10%",
    x: "-30%",
    scale: 0.5,
    duration: 5,
  },
  1
);

timeChp7.fromTo(
  "#ghost-big",
  { opacity: "100%", y: "200%", scale: 1.3 },
  {
    scale: 1,
    y: 0,
    duration: 3,
  },
  1
);

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 8
  -------------------------------------------------------------------------------------*/

const timeChp8 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    toggleActions: "play complete reset reset",
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp08",
  },
});

timeChp8.pause();

timeChp8
  .to(".yeux-fille-ouvert-fin", {
    opacity: 0,
    display: "none",
    duration: 3,
  })
  .to(
    ".mere-dos",
    {
      opacity: "100%",
      duration: 3,
    },
    1
  )
  .to(
    ".mere-dos",
    {
      opacity: 0,
      display: "none",
      duration: 3,
    },
    4
  )
  .to(
    ".derniere-visite",
    {
      opacity: "100%",
      duration: 3,
    },
    5
  )
  .to(
    ".derniere-visite",
    {
      opacity: 0,
      duration: 3,
    },
    7
  )
  .to(
    ".bras-fille-fin",
    {
      opacity: "100%",
      duration: 3,
      x: "20%",
    },
    9
  )
  .to(
    ".bras-mere",
    {
      opacity: "100%",
      duration: 3,
    },
    9
  )
  .to(
    ".bras-fille-fin",
    {
      opacity: 0,
      duration: 3,
    },
    13
  )
  .to(
    ".bras-mere",
    {
      opacity: 0,
      duration: 3,
    },
    13
  )
  .to(
    ".reunion",
    {
      opacity: "100%",
      duration: 3,
    },
    15
  )
  .to(
    ".reunion",
    {
      opacity: 0,
      duration: 3,
    },
    20
  )
  .paused(true);

timeChp8
  .fromTo(
    ".progres-black",
    {
      drawSVG: "0% 0%",
    },
    {
      drawSVG: "0% 100%",
      duration: 25,
      ease: "power1",
    },
    0
  )
  .paused(true);

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 9
  -------------------------------------------------------------------------------------*/

const speedElement = 100;

//parallaxe
const timeChp9 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp09",
  },
});

timeChp9.to(
  "#chp09",
  {
    backgroundPosition: "50% 100%",
    ease: "power1.in",
  },
  0
);
timeChp9.to(".gazon", { x: -1.2 * speedElement, ease: "power1.in" }, 0);
timeChp9.to(".tracks", { y: 1 * speedElement, x: 0.5 * speedElement }, 0.03);

/*-------------------------------------------------------------------------------------
  # APPEL AU PLUGIN GSAP
  -------------------------------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);
  // gsap code here!
});
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

/*-------------------------------------------------------------------------------------
  # HEARDER
  -------------------------------------------------------------------------------------*/

  let animHeader = gsap.to(".fleche-morph", { 
    morphSVG: ".fleche"
  });
gsap.fromTo(".fleche", { y: 10 }, { y: 30, repeat: -1, yoyo: true });

/*-------------------------------------------------------------------------------------
  # SPRITESHEET
  -------------------------------------------------------------------------------------*/

let animYeux = document.querySelector(".debut");
let animGhost = document.querySelector("#ghost");
let animGhost2 = document.querySelector("#ghost-big");
/*
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
*/
const chp1Animation = document.querySelector("#chp01");

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 1
  -------------------------------------------------------------------------------------*/

const timeCph1 = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "section",
    
    onEnter: (e) => {
      timeCph1.restart()
    }
  },
});

timeCph1.pause()

timeCph1.fromTo(
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
  .paused( true );



/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 2
  -------------------------------------------------------------------------------------*/

gsap.to("#chp02", {
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp02",
  },
});

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

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 3
  -------------------------------------------------------------------------------------*/

gsap.to("#chp03", {
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp03",
  },
});

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

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 4
  -------------------------------------------------------------------------------------*/

gsap.to("#chp04", {
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp04",
  },
});

gsap.to(".paper", { y: "100%",ease:"none", duration: 20 });

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 4-5
  -------------------------------------------------------------------------------------*/

gsap.to("#chp04-5", {
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp04-5",
  },
});

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

gsap
  .timeline()
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
  );

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 5
  -------------------------------------------------------------------------------------*/

gsap.to("#chp05", {
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

gsap.to("#chp05-5", {
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp05-5",
  },
});

gsap.fromTo(
  ".note-musique",
  { skewX: "9%", y: 0 },
  { skewX: "15%", repeat: -1, yoyo: true, y: "10%", duration: 2 }
);

gsap
  .timeline()
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
  );

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 6
  -------------------------------------------------------------------------------------*/

gsap.to("#chp06", {
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

gsap.to(".bras-fille-porte-fin", {
  x: "50%",
  y: "-20%",
  rotate: "20%",
  duration: 3,
});

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 7
  -------------------------------------------------------------------------------------*/

gsap.to("#chp07", {
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

gsap
  .timeline()
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

gsap.to(".train", {
  y: "-10%",
  x: "-30%",
  scale: 0.5,
  duration: 5,
});

gsap.fromTo(
  "#ghost-big",
  { opacity: "100%", y: "-20%", scale: 1.3 },
  {
    scale: 1,
    y: 0,
    duration: 6,
  }
);

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 8
  -------------------------------------------------------------------------------------*/

gsap.to("#chp08", {
  scrollTrigger: {
    pin: true,
    pinSpacing: true,
    scrub: true,
    markers: true,
    start: "top top",
    end: "bottom top",
    trigger: "#chp08",
  },
});

gsap
  .timeline()
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
  );

/*-------------------------------------------------------------------------------------
  # ANIMATION CHAPITRE 9
  -------------------------------------------------------------------------------------*/

//parallaxe
gsap.to("#chp09", {
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

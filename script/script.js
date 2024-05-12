document.addEventListener("DOMContentLoaded", (o) => {
  gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);
}),
  gsap
    .timeline()
    .to("#circle", {})
    .fromTo("#circle", { y: 10 }, { y: 30, repeat: -1, yoyo: !0 });
let animYeux = document.querySelector(".debut"),
  animGhost = document.querySelector("#ghost"),
  animGhost2 = document.querySelector("#ghost-big");
window.addEventListener("scroll", () => {
  setTimeout(() => {
    (animYeux.style.animationPlayState = "paused"),
      (animGhost.style.animationPlayState = "paused"),
      (animGhost2.style.animationPlayState = "paused"),
      document.querySelector("body").classList.remove("is-scrolling");
  }, 100),
    document.querySelector("body").classList.add("is-scrolling"),
    (animYeux.style.animationPlayState = "running"),
    (animGhost.style.animationPlayState = "running"),
    (animGhost2.style.animationPlayState = "running");
});
const timeChp1 = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: !1,
    markers: !0,
    start: "top top",
    end: "bottom top",
    trigger: "#chp01",
    toggleActions: "play complete reverse reset",
  },
});
timeChp1.pause(),
  timeChp1
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
    )
    .paused(!0),
  timeChp1
    .fromTo(".progres", {}, { duration: 15, ease: "power1" }, 0)
    .paused(!0);
const timeChp2 = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: !1,
    markers: !0,
    start: "top top",
    end: "bottom top",
    toggleActions: "play none reset play",
    trigger: "#chp02",
  },
});
timeChp2.pause(),
  timeChp2
    .to(".fille-coucher", { opacity: 0, duration: 3 })
    .fromTo(
      ".fille-debout",
      { opacity: 0 },
      { opacity: "100%", duration: 4 },
      1
    )
    .fromTo(
      ".fille-debout",
      { x: 0 },
      { x: "10%", repeat: -1, yoyo: !0, duration: 4 },
      "<0"
    )
    .paused(!0);
const timeChp3 = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: !1,
    markers: !0,
    start: "top top",
    end: "bottom top",
    trigger: "#chp03",
    toggleActions: "play complete none reset",
  },
});
timeChp3.pause(),
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
    .to(".ghost-porte", { x: "10%", yoyo: !0, repeat: -1, duration: 1 }, 3)
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
    .to(
      ".regard-gauche",
      { display: "block", opacity: "100%", duration: 5 },
      12
    )
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
    .paused(!0),
  timeChp2
    .fromTo(".progres", {}, { duration: 30, ease: "power1" }, 0)
    .paused(!0);
const timeChp4 = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: 1,
    markers: !0,
    start: "top top",
    end: "bottom top",
    trigger: "#chp04",
  },
});
timeChp4.pause(),
  timeChp4
    .to(".paper", { y: "-100vh", ease: "none" })
    .to(".v1", { y: "100vh", ease: "none" }, "<0")
    .to(".chp04", { y: "-30vh", ease: "none" }, "<0")
    .paused(!0);
const timeChp4_5 = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: !1,
    markers: !0,
    start: "top top",
    end: "bottom top",
    toggleActions: "play none reset play",
    trigger: "#chp04-5",
  },
});
gsap.to(".train-jouet", {
  motionPath: { align: ".trace", path: ".trace" },
  duration: 5,
  repeat: -1,
  yoyo: !0,
  ease: "power1",
}),
  gsap.to(".cube", { rotate: 360, repeat: -1, ease: "none", duration: 4 }),
  gsap.fromTo(
    ".peluche",
    { scaleX: "90%" },
    { scaleX: "100%", repeat: -1, yoyo: !0, ease: "bounce", duration: 4 }
  ),
  timeChp4_5
    .fromTo(
      ".fille-joue-block ",
      { opacity: 0 },
      { opacity: "100%", duration: 1 }
    )
    .to(
      ".fille-joue-block ",
      { opacity: "50%", repeat: -1, ease: "power1", yoyo: !0, duration: 2 },
      "<0"
    )
    .fromTo(
      ".fille-joue-peluche ",
      { opacity: 0 },
      { opacity: "100%", duration: 1 }
    )
    .to(
      ".fille-joue-peluche ",
      { opacity: "50%", repeat: -1, ease: "power1", yoyo: !0, duration: 2 },
      "<1"
    )
    .fromTo(".fille-curieuse", { opacity: 0 }, { opacity: "100%", duration: 1 })
    .to(
      ".fille-curieuse ",
      { opacity: "50%", repeat: -1, ease: "power1", yoyo: !0, duration: 2 },
      "<0"
    )
    .fromTo(
      ".fille-curieuse ",
      { y: "10%" },
      { y: 0, yoyo: !0, repeat: -1, ease: "power1", duration: 2 },
      "<0"
    )
    .fromTo(".mere-assise", { opacity: 0 }, { opacity: "100%", duration: 1 })
    .to(".fille-curieuse ", { opacity: 0, duration: 2, display: "none" }, 10)
    .to(".fille-joue-block", { opacity: 0, duration: 2, display: "none" }, 10)
    .to(".fille-joue-peluche", { opacity: 0, display: "none", duration: 2 }, 10)
    .to(".mere-assise", { opacity: 0, display: "none", duration: 2 }, 10)
    .fromTo(
      "#fille-cours",
      { opacity: 0, display: "none", x: "-100vw" },
      { x: "100vw", opacity: "100%", display: "block", duration: 5 },
      10
    )
    .paused(!0),
  timeChp4_5
    .fromTo(".progres", {}, { duration: 15, ease: "power1" }, 0)
    .paused(!0);
const speed = 100,
  timeChp5 = gsap.timeline({
    scrollTrigger: {
      pin: !0,
      pinSpacing: !0,
      scrub: 1,
      markers: !0,
      start: "top top",
      end: "bottom top",
      trigger: "#chp05",
    },
  });
timeChp5
  .to(".v2", { y: "300%", ease: "none" }, "<0")
  .to(".c1", { y: -500, ease: "power1.in" }, 0.06)
  .to(".c2", { y: -1e4, ease: "power1.in" }, 0.03)
  .to(".c3", { y: -1e3 }, 0.03)
  .to(".peluche-tombe", { y: 900 }, 0.02)
  .to(".train-tombe", { y: 2e3 }, 0.03)
  .to(".chp05", { x: 300, y: 100 }, 0.03)
  .to(".t2", { x: 150, y: 100 }, 0.03)
  .to(".t3", { x: 450, y: 100 }, 0.03),
  gsap.to(".cube-tombe", {
    rotate: 360,
    repeat: -1,
    ease: "none",
    duration: 5,
  }),
  gsap.to(".peluche-tombe", {
    rotate: 360,
    repeat: -1,
    ease: "none",
    duration: 2,
  }),
  gsap.to(".train-tombe", {
    rotate: 360,
    repeat: -1,
    ease: "none",
    duration: 3,
  }),
  gsap.to(".etoile-tombe", {
    rotate: 360,
    repeat: -1,
    ease: "none",
    duration: 10,
  });
const timeChp5_5 = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: !1,
    markers: !0,
    start: "top top",
    end: "bottom top",
    toggleActions: "play complete reset play",
    trigger: "#chp05-5",
  },
});
timeChp5_5
  .fromTo(".fille-chante", { opacity: 0 }, { opacity: "100%", duration: 1 })
  .to(
    ".fille-chante",
    { opacity: "50%", repeat: -1, ease: "power1", yoyo: !0, duration: 2 },
    "<0"
  )
  .fromTo(".fille-livre", { opacity: 0 }, { opacity: "100%", duration: 1 })
  .to(
    ".fille-livre",
    { opacity: "50%", repeat: -1, ease: "power1", yoyo: !0, duration: 2 },
    "<1"
  )
  .fromTo(".fille-devoir", { opacity: 0 }, { opacity: "100%", duration: 1 })
  .to(
    ".fille-devoir",
    { opacity: "50%", repeat: -1, ease: "power1", yoyo: !0, duration: 2 },
    "<0"
  )
  .fromTo(".mere-lit", { opacity: 0 }, { opacity: "100%", duration: 1 })
  .to(".fille-devoir", { opacity: 0, duration: 2, display: "none" }, 10)
  .to(".fille-livre", { opacity: 0, duration: 2, display: "none" }, 10)
  .fromTo(".dessin-corps", {}, { duration: 1 })
  .fromTo(".dessin-trait", {}, { duration: 1 })
  .to(".fille-chante", { opacity: 0, display: "none", duration: 2 }, 10)
  .to(".mere-lit", { opacity: 0, display: "none", duration: 2 }, 10)
  .fromTo(
    "#fille-cours",
    { opacity: 0, display: "none", x: "-100vw" },
    { x: "100vw", opacity: "100%", display: "block", duration: 5 },
    10
  )
  .paused(!0),
  timeChp5_5
    .fromTo(".progres", {}, { duration: 15, ease: "power1" }, 0)
    .paused(!0),
  gsap.fromTo(
    ".note-musique",
    { skewX: "9%", y: 0 },
    { skewX: "15%", repeat: -1, yoyo: !0, y: "10%", duration: 2 }
  );
const timeChp6 = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: !0,
    markers: !0,
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
const timeChp7 = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    scrub: !0,
    markers: !0,
    start: "top top",
    end: "bottom top",
    trigger: "#chp07",
  },
});
timeChp7
  .to(".bras-fille-train", { x: "-20%", y: "-20%", scale: 1.3, duration: 3 })
  .to(".bras-fille-train", { y: "10%", x: "30%", scale: 0.7, duration: 3 }),
  timeChp7.to(".train", { y: "-10%", x: "-30%", scale: 0.5, duration: 5 }, 1),
  timeChp7.fromTo(
    "#ghost-big",
    { opacity: "100%", y: "200%", scale: 1.3 },
    { scale: 1, y: 0, duration: 3 },
    1
  );
const timeChp8 = gsap.timeline({
  scrollTrigger: {
    pin: !0,
    pinSpacing: !0,
    toggleActions: "play complete reset reset",
    markers: !0,
    start: "top top",
    end: "bottom top",
    trigger: "#chp08",
  },
});
timeChp8.pause(),
  timeChp8
    .to(".yeux-fille-ouvert-fin", { opacity: 0, display: "none", duration: 3 })
    .to(".mere-dos", { opacity: "100%", duration: 3 }, 1)
    .to(".mere-dos", { opacity: 0, display: "none", duration: 3 }, 4)
    .to(".derniere-visite", { opacity: "100%", duration: 3 }, 5)
    .to(".derniere-visite", { opacity: 0, duration: 3 }, 7)
    .to(".bras-fille-fin", { opacity: "100%", duration: 3, x: "20%" }, 9)
    .to(".bras-mere", { opacity: "100%", duration: 3 }, 9)
    .to(".bras-fille-fin", { opacity: 0, duration: 3 }, 13)
    .to(".bras-mere", { opacity: 0, duration: 3 }, 13)
    .to(".reunion", { opacity: "100%", duration: 3 }, 15)
    .to(".reunion", { opacity: 0, duration: 3 }, 20)
    .paused(!0),
  timeChp8
    .fromTo(".progres-black", {}, { duration: 25, ease: "power1" }, 0)
    .paused(!0);
const speedElement = 100,
  timeChp9 = gsap.timeline({
    scrollTrigger: {
      pin: !0,
      pinSpacing: !0,
      scrub: !0,
      markers: !0,
      start: "top top",
      end: "bottom top",
      trigger: "#chp09",
    },
  });
timeChp9.to("#chp09", { backgroundPosition: "50% 100%", ease: "power1.in" }, 0),
  timeChp9.to(".gazon", { x: -120, ease: "power1.in" }, 0),
  timeChp9.to(".tracks", { y: 100, x: 50 }, 0.03);

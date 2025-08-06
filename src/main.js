import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".press p span").forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    ease: "power1.out",
    duration: 0.75,
    scrollTrigger: {
      trigger: el,
      // markers: true,
      start: "top 90%",
    },
  });
});

gsap.to(".vision h2 span", {
  opacity: 1,
  y: 0,
  ease: "power1.out",
  duration: 0.75,
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".vision h2",
    // markers: true,
    start: "top 90%",
  },
});

gsap.to(".vision > div p span.rectangle", {
  opacity: 1,
  x: 0,
  duration: 0.75,
  ease: "power1.out",
  stagger: 0.25,
  scrollTrigger: {
    trigger: ".vision > div p",
    // markers: true,
    start: "top 90%",
  },
});

gsap.to(".vision > div p + p", {
  opacity: 1,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".vision > div p + p",
    // markers: true,
    start: "top 90%",
  },
});

gsap.to(".solutions__left h2 span", {
  opacity: 1,
  y: 0,
  duration: 0.75,
  stagger: 0.25,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".solutions__left h2",
    // markers: true,
    start: "top 90%",
  },
});

gsap.to(".solutions__left > p span", {
  opacity: 1,
  x: 0,
  duration: 0.75,
  stagger: 0.25,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".solutions__left > p",
    // markers: true,
    start: "top 90%",
  },
});

gsap.to(".solutions__left div p", {
  opacity: 1,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".solutions__left div",
    // markers: true,
    start: "top 90%",
  },
});

gsap.to(".reasons__top h2", {
  opacity: 1,
  y: 0,
  duration: 0.75,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".reasons__top",
    start: "top 90%",
    // markers: true,
  },
});

gsap.to(".reasons__top h2 + p", {
  opacity: 1,
  y: 0,
  duration: 0.75,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".reasons__top h2",
    start: "bottom 95%",
    // markers: true,
  },
});

gsap.to(".reasons__top p + p", {
  opacity: 1,
  duration: 1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".reasons__top h2 + p",
    start: "bottom 95%",
  },
});

gsap.to(".innovation__right h2 span", {
  x: 0,
  opacity: 1,
  duration: 0.75,
  stagger: 0.25,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".innovation__right h2",
    start: "top 90%",
    // markers: true,
  },
});

const actionsTimeline = gsap.timeline({
  defaults: {
    ease: "power1.out",
  },
  scrollTrigger: {
    trigger: ".actions__top h2",
    start: "top 90%",
    // markers: true,
  },
});

actionsTimeline
  .to(".actions__top h2 span", {
    opacity: 1,
    y: 0,
    stagger: 0.25,
    duration: 0.7,
  })
  .to(
    ".actions__top h2 + p",
    {
      opacity: 1,
      duration: 1,
    },
    "+=0.25"
  );

gsap.utils.toArray(".action4 span").forEach((el) => {
  gsap.to(el, {
    transform: "scale(1, 1)",
    rotate: -4.2,
    duration: 0.75,
    delay: 1,
    ease: "power1.out",

    scrollTrigger: {
      trigger: el,
      start: "center 90%",
      // markers: true
    },
  });
});

gsap.to(".collaboration h2 span", {
  opacity: 1,
  y: 0,
  stagger: 0.25,
  duration: 0.75,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".collaboration h2",
    start: "top 90%",
    // markers: true
  },
});

gsap.to(".newsletter__right div h2", {
  opacity: 1,
  y: 0,
  duration: 0.75,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".newsletter__right div img",
    start: "bottom 90%",
    // markers: true
  },
});

gsap.to(".partnerships__top h2", {
  opacity: 1,
  duration: 0.75,
  scrollTrigger: {
    trigger: ".partnerships__top h2",
    start: "top 95%",
    // markers: true,
  },
});

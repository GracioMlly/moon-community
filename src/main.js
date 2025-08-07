import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let matchMedia = gsap.matchMedia();

matchMedia.add("(max-width : 1024px )", () => {
  gsap.utils.toArray(".press p span").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: el,
        // markers: true,
        start: "top 75%",
      },
    });
  });

  gsap.to(".vision h2 span", {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 1,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".vision h2",
      // markers: true,
      start: "top 75%",
    },
  });

  gsap.to(".vision > div p span.rectangle", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".vision > div p",
      // markers: true,
      start: "top 75%",
    },
  });

  gsap.to(".vision > div p + p", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".vision > div p + p",
      // markers: true,
      start: "top 75%",
    },
  });

  gsap.to(".solutions__left h2 span", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.25,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".solutions__left h2",
      // markers: true,
      start: "top 75%",
    },
  });

  gsap.to(".solutions__left > p span", {
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: 0.25,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".solutions__left > p",
      // markers: true,
      start: "top 75%",
    },
  });

  gsap.to(".solutions__left div p", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".solutions__left div",
      // markers: true,
      start: "top 75%",
    },
  });

  const reasonsTimeline = gsap.timeline({
    defaults: {
      ease: "power2.out",
      duration: 1,
    },
    scrollTrigger: {
      trigger: ".reasons__top",
      start: "top 75%",
      // markers: true,
    },
  });

  reasonsTimeline
    .to(".reasons__top h2", {
      opacity: 1,
      y: 0,
    })
    .to(
      ".reasons__top h2 + p",
      {
        opacity: 1,
        y: 0,
      },
      "-=0.25"
    )
    .to(
      ".reasons__top p + p",
      {
        opacity: 1,
      },
      "-=0.25"
    );

  gsap.to(".innovation__right h2 span", {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.25,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".innovation__right h2",
      start: "top 75%",
      // markers: true,
    },
  });

  const actionsTimeline = gsap.timeline({
    defaults: {
      ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".actions__top",
      start: "top 75%",
      // markers: true,
    },
  });

  actionsTimeline
    .to(".actions__top h2 span", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      duration: 1,
    })
    .to(
      ".actions__top h2 + p",
      {
        opacity: 1,
        duration: 1,
      },
      "-=0.25"
    );

  gsap.utils.toArray(".action4 span").forEach((el) => {
    gsap.to(el, {
      transform: "scale(1, 1)",
      rotate: -4.2,
      duration: 1,
      delay: 0.25,
      ease: "power2.out",

      scrollTrigger: {
        trigger: el,
        start: "top 75%",
        // markers: true
      },
    });
  });

  gsap.to(".collaboration h2 span", {
    opacity: 1,
    y: 0,
    stagger: 0.25,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".collaboration h2",
      start: "top 75%",
      // markers: true
    },
  });

  gsap.to(".newsletter__right div h2", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".newsletter__right",
      start: "top 75%",
      // markers: true
    },
  });

  gsap.to(".partnerships__top h2", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",

    scrollTrigger: {
      trigger: ".partnerships__top",
      start: "top 75%",
      // markers: true,
    },
  });

  ScrollTrigger.refresh();
});

matchMedia.add("(min-width : 1025px )", () => {
  gsap.utils.toArray(".press p span").forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      scrollTrigger: {
        trigger: el,
        // markers: true,
        start: "top 55%",
      },
    });
  });

  gsap.to(".vision h2 span", {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 1,
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".vision h2",
      // markers: true,
      start: "top 55%",
    },
  });

  gsap.to(".vision > div p span.rectangle", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.25,
    scrollTrigger: {
      trigger: ".vision > div p",
      // markers: true,
      start: "top 55%",
    },
  });

  gsap.to(".vision > div p + p", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".vision > div p + p",
      // markers: true,
      start: "top 55%",
    },
  });

  gsap.to(".solutions__left h2 span", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.25,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".solutions__left h2",
      // markers: true,
      start: "top 55%",
    },
  });

  gsap.to(".solutions__left > p span", {
    opacity: 1,
    x: 0,
    duration: 1,
    stagger: 0.25,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".solutions__left > p",
      // markers: true,
      start: "top 55%",
    },
  });

  gsap.to(".solutions__left div p", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".solutions__left div",
      // markers: true,
      start: "top 55%",
    },
  });

  const reasonsTimeline = gsap.timeline({
    defaults: {
      ease: "power2.out",
      duration: 1,
    },
    scrollTrigger: {
      trigger: ".reasons__top",
      start: "top 55%",
      // markers: true,
    },
  });

  reasonsTimeline
    .to(".reasons__top h2", {
      opacity: 1,
      y: 0,
    })
    .to(
      ".reasons__top h2 + p",
      {
        opacity: 1,
        y: 0,
      },
      "-=0.25"
    )
    .to(
      ".reasons__top p + p",
      {
        opacity: 1,
      },
      "-=0.25"
    );

  gsap.to(".innovation__right h2 span", {
    x: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.25,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".innovation__right h2",
      start: "top 55%",
      // markers: true,
    },
  });

  const actionsTimeline = gsap.timeline({
    defaults: {
      ease: "power2.out",
    },
    scrollTrigger: {
      trigger: ".actions__top",
      start: "top 55%",
      // markers: true,
    },
  });

  actionsTimeline
    .to(".actions__top h2 span", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
      duration: 1,
    })
    .to(
      ".actions__top h2 + p",
      {
        opacity: 1,
        duration: 1,
      },
      "-=0.25"
    );

  gsap.utils.toArray(".action4 span").forEach((el) => {
    gsap.to(el, {
      transform: "scale(1, 1)",
      rotate: -4.2,
      duration: 1,
      delay: 0.25,
      ease: "power2.out",

      scrollTrigger: {
        trigger: el,
        start: "top 55%",
        // markers: true
      },
    });
  });

  gsap.to(".collaboration h2 span", {
    opacity: 1,
    y: 0,
    stagger: 0.25,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".collaboration h2",
      start: "top 55%",
      // markers: true
    },
  });

  gsap.to(".newsletter__right div h2", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".newsletter__right",
      start: "top 55%",
      // markers: true
    },
  });

  gsap.to(".partnerships__top h2", {
    opacity: 1,
    duration: 1,
    ease: "power2.out",

    scrollTrigger: {
      trigger: ".partnerships__top",
      start: "top 55%",
      // markers: true,
    },
  });

  ScrollTrigger.refresh();
});

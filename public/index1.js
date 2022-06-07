const tl = gsap
  .timeline()
  .from("#head", {
    opacity: 0,
    y: -20,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
  })
  .from(".list", {
    opacity: 0,
    y: 20,
    duration: 1,
    ease: "power2.out",
    delay: 0,
    stagger: 0.1,
  })
  .from(
    ".icons",
    {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out",
      delay: 0,
    },
    "-=0.5"
  );
//just for fun

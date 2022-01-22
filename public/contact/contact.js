gsap
  .timeline()
  .from(".head", {
    opacity: 0,
    y: -25,
    duration: 1,
    ease: "power2.out",
    delay: 0.5,
  })
  .from(
    ".left",
    {
      opacity: 0,
      x: -20,
      duration: 1.5,
      ease: "power2.out",
    },
    "-=1"
  )
  .from(
    ".right",
    {
      opacity: 0,
      y: 10,
      duration: 1.5,
      ease: "power2.out",
    },
    "-=1.5"
  );

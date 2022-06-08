gsap
  .timeline()
  .fromTo(
    ".head",
    { opacity: 0, y: 25 },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.2,
    }
  )
  .from(
    ".right",
    {
      opacity: 0,
      y: -25,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.5"
  )
  .fromTo(
    ".left",
    {
      opacity: 0,
      x: -25,
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.5"
  );

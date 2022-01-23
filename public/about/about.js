gsap
  .timeline()
  .fromTo(
    ".right",
    {
      opacity: 0,
      y: 10,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
    }
  )
  .from(
    ".left",
    {
      opacity: 0,
      y: -10,
      duration: 1.5,
      ease: "power2.out",
    },
    "-=1"
  );

const main = document.querySelector(".main");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

document.addEventListener("DOMContentLoaded", () => {
  let vid = document.createElement("iframe");
  vid.classList.add("vid");
  console.log(id);
  vid.setAttribute("allowFullScreen", "");
  vid.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
  main.appendChild(vid);
});

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
    ".main",
    {
      opacity: 0,
      y: 25,
      duration: 1.5,
      ease: "power2.out",
    },
    "-=1"
  )
  .fromTo(
    ".left",
    {
      x: -25,
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power2.out",
    },
    "-=1"
  )
  .from(
    ".redband",
    {
      opacity: 0,
      height: 0,
      duration: 1.5,
      ease: "power2.out",
    },
    "-=1"
  );

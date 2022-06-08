const main = document.querySelector(".main");
const head = document.querySelector(".head");
const descriptionBox = document.querySelector(".description");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

document.addEventListener("DOMContentLoaded", () => {
  fetch(`/getdata/${id}`)
    .then((res) => res.json())
    .then((details) => {
      // console.log(details.items[0].snippet.description);
      let title = details.items[0].snippet.title;
      let description = details.items[0].snippet.description.substring(0, 140);
      console.log(description);
      head.innerHTML = title;
      descriptionBox.innerHTML = `<p>${description}</p>`;
      let vid = document.createElement("iframe");
      vid.classList.add("vid");
      console.log(id);
      vid.setAttribute("allowFullScreen", "");
      vid.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1`;
      main.appendChild(vid);
    });
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
    ".description",
    {
      opacity: 0,
      y: -25,
      duration: 1,
      ease: "power2.out",
    },
    "-=1"
  )
  .from(
    ".main",
    {
      opacity: 0,
      y: -25,
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
  );

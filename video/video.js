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

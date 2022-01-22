let thumbnails = [];
let vidId = [];
const container = document.querySelector(".right");
document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("thumbnails") == null) {
    fetch("/getdata")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        let thumbs = [];
        let vids = [];
        //this.setState({ items: json.items, DataisLoaded: true });
        json.items.forEach((item) => {
          thumbs.push(item.snippet.thumbnails.high.url);
          thumbnails.push(item.snippet.thumbnails.high.url);
          vids.push(item.snippet.resourceId.videoId);
          vidId.push(item.snippet.resourceId.videoId);
        });

        sessionStorage.setItem("thumbnails", JSON.stringify(thumbs));
        sessionStorage.setItem("id", JSON.stringify(vids));
        loadThumbnails();
        loadVideos();
        animation();
      });
  } else {
    thumbnails = JSON.parse(sessionStorage.getItem("thumbnails"));
    vidId = JSON.parse(sessionStorage.getItem("id"));
    loadThumbnails();
    loadVideos();
    animation();
  }
});

const loadThumbnails = () => {
  thumbnails.forEach((thumbnail) => {
    let img = document.createElement("img");
    img.classList.add("myimg");
    img.src = thumbnail;
    container.appendChild(img);
  });
};
const loadVideos = () => {
  document.querySelectorAll(".myimg").forEach((image, index) => {
    image.addEventListener("click", () => {
      console.log(vidId[index]);
      window.location.href = `../video/video.html?id=${vidId[index]}`;
    });
  });
};

//creating animation
const animation = () => {
  gsap
    .timeline()
    .fromTo(
      ".head",
      { y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
      }
    )
    .from(
      ".right",
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
};

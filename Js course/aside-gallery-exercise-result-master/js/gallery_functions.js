window.onload = function () {
  console.log("Window loaded");
  let asideImgs = document.querySelectorAll("aside > img");
  for (let asideImg of asideImgs) {
    asideImg.addEventListener("mouseover", updateMain);
    asideImg.addEventListener("mouseout", resetMain);
  }
};

function updateMain(event) {
  let div = document.getElementById("image");
  let span = document.getElementById("imageText");
  console.log(event.target.src);
  console.log(event.target.alt);

  div.style.backgroundImage = "url('" + event.target.src + "')";
  span.innerHTML = event.target.alt;
}

function resetMain() {
  let div = document.getElementById("image");
  let span = document.getElementById("imageText");

  div.style.backgroundImage = "";
  span.innerHTML = "Hover an image to display it here.";
}

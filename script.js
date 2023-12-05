const icon = document.querySelector(".js-icon");
const body = document.querySelector("body");

icon.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  if (body.classList.contains("dark-theme")) {
    icon.src = "./images/sun.png";
  } else {
    icon.src = "./images/moon.png";
  }
})
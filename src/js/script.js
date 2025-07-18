const menuOpener = document.querySelector(".menu-opener");

function menuToggle() {
  let nav = document.querySelector("header nav");
  nav.classList.toggle("opened");
};

menuOpener.addEventListener("click", menuToggle);

function toggleSlider() {
  const slides = document.querySelectorAll("input[name=slider]");
  if (slides.length === 0) return;

  let current = document.querySelector("input[name=slider]:checked");
  if (!current) {
    current = document.querySelector("input[name=slider");
    current.setAttribute("checked", true);
  };

  let id = parseInt(current.getAttribute("id").split("-")[1]);
  if (id + 1 <= slides.length) {
    id++;
  } else {
    id = 1;
  };

  for (let slider of slides) slider.removeAttribute("checked");
  document.querySelector(`#slider-${id}`).setAttribute("checked", true);
};

setInterval(toggleSlider, 5000);

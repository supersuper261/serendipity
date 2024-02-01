document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");

  container.addEventListener("click", function () {
    container.classList.toggle("clicked");
  });
});

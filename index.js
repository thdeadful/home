const card = document.getElementById("flip-card");
const logo = document.querySelectorAll(".my-logo");
logo.forEach((el) => {
  el.addEventListener("click", function () {
    card.classList.toggle("flipped");
  });
});

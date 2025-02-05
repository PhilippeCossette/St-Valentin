const letter = document.querySelector(".letter");
const pull = document.querySelector(".pull");
let openState = "closed";
console.log(openState);

pull.addEventListener("click", () => {
  if (openState == "closed") {
    letter.style.transform = "translateY(0)";
    openState = "opened";
  } else {
    letter.style.transform = "translateY(100%)";
    openState = "closed";
  }
});

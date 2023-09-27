let arrowIcon = document.querySelector(".arrow"),
  shareFrame = document.querySelector(".share");

arrowIcon.addEventListener("click", (e) => {
  if (!arrowIcon.classList.contains("click")) {
    shareFrame.style.display = "block";
    arrowIcon.classList.add("click");
  } else {
    shareFrame.style.display = "none";
    arrowIcon.classList.remove("click");
  }
});

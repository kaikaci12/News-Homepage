const button = document.querySelector(".read-more");
button.addEventListener("click", () => {
  document.location.href = "#end";
});
const burgerIcon = document.querySelector(".burger-meniu");
const navigation = document.querySelector("nav");
const W = document.querySelector(".W-icon");

burgerIcon.addEventListener("click", () => {
  navigation.classList.toggle("navActive");
  W.style.opacity = "0.5";
  main.style.opacity = "0.5";
  navigation.style.opacity = "1 !important";
});
const close = document.querySelector(".close");

close.addEventListener("click", () => {
  navigation.classList.toggle("navActive");
  W.style.opacity = "1";
  main.style.opacity = "1";
});

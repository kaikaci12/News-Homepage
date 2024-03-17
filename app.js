const button = document.querySelector(".read-more");
button.addEventListener("click", () => {
  location.reload();
});
const burgerIcon = document.querySelector(".burger-meniu");
const navigation = document.querySelector("nav");
const main = document.querySelector("#main");
burgerIcon.addEventListener("click", () => {
  navigation.classList.toggle("navActive");

  document.body.style.opacity = "0.5";

  navigation.style.opacity = "1 !important";
});
const close = document.querySelector(".close");

close.addEventListener("click", () => {
  navigation.classList.toggle("navActive");
  document.body.style.opacity = "1";
});

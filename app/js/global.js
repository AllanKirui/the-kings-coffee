// Burger functionality
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
   burger.classList.toggle("active");
   if (burger.classList.contains("active")) {
      body.classList.toggle("no-scroll");
      menu.style.visibility = "visible";
      menu.children[0].style.transform = "scale(1)";
      menu.children[0].style.transitionDuration = "0.75s";
      menu.children[0].children[0].style.opacity = "1";
      menu.children[0].children[0].style.transition = "opacity 0.3s ease";
   } else {
      body.classList.remove("no-scroll");
      burger.classList.remove("active");
      menu.style.visibility = "hidden";
      menu.children[0].style.transform = "scale(0)";
      menu.children[0].style.transitionDuration = "0.75s";
      menu.children[0].children[0].style.opacity = "0";
      menu.children[0].children[0].style.transition = "opacity 0.3s ease";
   }
});

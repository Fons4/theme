// animate.js
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll(".post, .post-title, .post-cover img, .navbar, .footer");
  elements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(30px)";
    setTimeout(() => {
      el.style.transition = "all 0.8s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, 200 * index);
  });
});

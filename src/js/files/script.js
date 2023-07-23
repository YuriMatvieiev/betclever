// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
document.addEventListener("DOMContentLoaded", function () {
  const filterList = document.querySelector(".filter__list");

  let isDragging = false;
  let startX, scrollLeft;

  // Mouse events
  filterList.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - filterList.offsetLeft;
    scrollLeft = filterList.scrollLeft;
  });

  filterList.addEventListener("mouseleave", () => {
    isDragging = false;
  });

  filterList.addEventListener("mouseup", () => {
    isDragging = false;
  });

  filterList.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - filterList.offsetLeft;
    const walk = (x - startX) * 1.5; // You can adjust the scroll speed
    filterList.scrollLeft = scrollLeft - walk;
  });

  // Touch events
  filterList.addEventListener("touchstart", (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - filterList.offsetLeft;
    scrollLeft = filterList.scrollLeft;
  });

  filterList.addEventListener("touchend", () => {
    isDragging = false;
  });

  filterList.addEventListener("touchcancel", () => {
    isDragging = false;
  });

  filterList.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - filterList.offsetLeft;
    const walk = (x - startX) * 1.5; // You can adjust the scroll speed
    filterList.scrollLeft = scrollLeft - walk;
  });
});

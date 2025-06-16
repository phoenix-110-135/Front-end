function toggleMenu() {
    document.body.classList.toggle('menu-open');
  }
  
const cursor = document.getElementById('circle');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener("mousemove", (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
});
  
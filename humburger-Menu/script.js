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
  
function animate() {
    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;
    cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animate);
}

animate();
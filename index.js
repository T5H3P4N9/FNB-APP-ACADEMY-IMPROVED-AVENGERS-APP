
const menuToggle = document.getElementById("menuToggle");

menuToggle.onclick = function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('show');
  }

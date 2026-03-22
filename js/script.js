const menu = document.getElementById("menu");
const menuBtn = document.querySelector(".menu-btn");
const overlay = document.getElementById("overlay");

function toggleMenu(){
  menu.classList.toggle("active");
  menuBtn.classList.toggle("open");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
}

// close when clicking links
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("open");
    overlay.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

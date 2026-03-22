// ================= MENU TOGGLE =================
const menu = document.getElementById("menu");
const menuBtn = document.querySelector(".menu-btn");

function toggleMenu(){
  menu.classList.toggle("active");
  menuBtn.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
}

// ================= AUTO CLOSE MENU =================
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("open");
  });
});

// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.style.padding = "15px 40px";
    navbar.style.background = "rgba(0,0,0,0.9)";
  } else {
    navbar.style.padding = "20px 50px";
    navbar.style.background = "rgba(0,0,0,0.6)";
  }
});

// ================= SCROLL REVEAL =================
const reveals = document.querySelectorAll(".card, .section h2, .about-text");

function revealOnScroll(){
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
// ================= BUTTON RIPPLE EFFECT =================
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function(e){
    const circle = document.createElement("span");

    circle.classList.add("ripple");
    this.appendChild(circle);

    const rect = this.getBoundingClientRect();

    circle.style.left = e.clientX - rect.left + "px";
    circle.style.top = e.clientY - rect.top + "px";

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});


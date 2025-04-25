// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
  });

  // Parallax
  window.addEventListener("scroll", function () {
    const parallax = document.querySelector(".parallax-bg");
    let scroll = window.pageYOffset;
    parallax.style.transform = "translateY(" + scroll * 0.5 + "px)";
  });

  // Mobile menu toggle with animation
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  let isMenuOpen = false;

  menuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileMenu.classList.remove("max-h-0");
      mobileMenu.classList.add("max-h-[500px]");
    } else {
      mobileMenu.classList.add("max-h-0");
      mobileMenu.classList.remove("max-h-[500px]");
    }
  });

  // Desktop about dropdown toggle
  const aboutBtn = document.getElementById("about-btn");
  const aboutDropdown = document.getElementById("about-dropdown");

  aboutBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    aboutDropdown.classList.toggle("hidden");
  });

  // Mobile about dropdown toggle
  const mobileAboutBtn = document.getElementById("mobile-about-btn");
  const mobileAboutDropdown = document.getElementById(
    "mobile-about-dropdown"
  );

  mobileAboutBtn.addEventListener("click", () => {
    mobileAboutDropdown.classList.toggle("hidden");
  });

  // Close dropdowns when clicking outside
  window.addEventListener("click", (e) => {
    if (!aboutBtn.contains(e.target)) {
      aboutDropdown.classList.add("hidden");
    }
  });

  
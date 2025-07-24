
//   const navLinks = document.getElementById("navLinks");
  const sections = document.querySelectorAll(".page-section");
//   const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  const allNavItems = document.querySelectorAll("#navLinks a");
//   
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  // Toggle nav (open/close)
  function toggleNav(closeOnly = false) {
    if (closeOnly) {
      navLinks.classList.remove("open");
      nav.classList.remove("open");
    } else {
      navLinks.classList.toggle("open");
      nav.classList.toggle("open");
    }
  }

  // Show the correct section and hide others
  function showSection(id) {
    sections.forEach((sec) => {
      sec.classList.toggle("active", sec.id === id);
    });
  }

  // Initial load
  window.addEventListener("load", () => {
    const hash = location.hash.replace("#", "") || "job";
    showSection(hash);
  });

  // Handle hash route changes
  window.addEventListener("hashchange", () => {
    const hash = location.hash.replace("#", "") || "job";
    showSection(hash);
    toggleNav(true); // Auto-close menu when route changes
  });

  // Hamburger menu click toggle
  hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
  });
   // Auto-close menu when any nav link is clicked
  document.querySelectorAll("#navLinks a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });

  // Optional: Also close menu when a nav link is clicked (helps with non-hash links too)
  allNavItems.forEach((link) => {
    link.addEventListener("click", () => {
      toggleNav(true);
    });
  })



     document.querySelector('.scroll-to-card').addEventListener('click', function () {
    const target = document.getElementById('java-dsa-card');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  

// Load navbar.html into the page
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;

    // Add menu toggle functionality
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        mobileMenu.classList.toggle("hidden");
      });
    }
  });

// Load navbar.html into the page
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;

    // Select elements after the navbar is loaded
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn) {
      menuBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent immediate closure when clicking the button
        mobileMenu.classList.toggle("hidden");
        
        // Ensure desktop menu remains hidden when mobile menu is shown
        if (!mobileMenu.classList.contains("hidden")) {
          menu.classList.add("hidden");
        }
      });

      // Close mobile menu when clicking outside
      document.addEventListener("click", (event) => {
        if (
          !menuBtn.contains(event.target) &&
          !mobileMenu.contains(event.target) &&
          !menu.contains(event.target)
        ) {
          mobileMenu.classList.add("hidden");
        }
      });
    }
  });

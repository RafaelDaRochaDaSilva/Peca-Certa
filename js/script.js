function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.menu-button')) {
      const menu = document.getElementById("menu");
      if (menu) menu.style.display = "none";
    }
  };

  
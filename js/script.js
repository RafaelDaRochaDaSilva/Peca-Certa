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

  const searchBar = document.getElementById("searchBar");

  searchBar.addEventListener("input", function () {
    const searchValue = searchBar.value.toLowerCase();
    const carros = document.querySelectorAll("a[data-nome]");

    carros.forEach((carro) => {
      const nome = carro.getAttribute("data-nome").toLowerCase();
      if (nome.includes(searchValue)) {
        carro.style.display = "inline-block";
      } else {
        carro.style.display = "none";
      }
    });
  });

  
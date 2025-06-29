function toggleMenu(menu) {
  menu.style.display = menu.style.display === "block" ? "none" : "block";
  }
      
    window.onclick = function(e) {
      if (!e.target.matches('.menu-button')) {
        const menu = document.getElementById("menu");
      if (menu) menu.style.display = "none";
      }
    };

class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="/css/carrinho.css">
      <header>
                <div class=".home">
                    <div class="menu">
                    <div class="menu2">
                      <img class="logo" src="/imgs/logo2.png" />
                        <div class="frame-45">
                          <div class="frame-45" style="display: flex; align-items: center; padding: 20px;">
                            <div class="sair">
                              <input type="text" class="text-bar" placeholder="Pesquisar peça..." 
                                      style="
                                      padding: 10px 20px;
                                      width: 80vw;
                                      <!--max-width: 1200px;-->
                                      font-size: 18px;
                                      border-radius: 18px;
                                      border: 2px solid #ccc;
                                      box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);">
                                  </div>
                                    <div class="menu-container">
                                    <button class="menu-button" onclick="toggleMenu()">☰ Menu</button>
                                    <div id="menu" class="menu-dropdown">
                                        <a href="/pages/home.html">🔙 Home</a>
                                        <a href="../../index.html">👤 Login</a>    
                                    </div>
                                  </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </header>
        `;

    const button = shadow.querySelector('.menu-button');
    const menu = shadow.getElementById('menu');

    if (button && menu) {
      button.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu(menu);
      });
    }
    
    
    }
}



customElements.define('header-component', HeaderComponent);


let total = 0;
let itemId = 0;


const produtos = [
  {
    nome: "Pneu 16''",
    preco: 320.00,
    imagem:"/imgs/Corsa-Sedan-20021 (1).png"
  },
  {
    nome: "Filtro de Óleo",
    preco: 25.00,
    imagem: "/imgs/ford-ka-20101.png"
  },
  {
    nome: "Pastilha de Freio",
    preco: 75.50,
    imagem: "/imgs/honda-city1.png"
  }
];

function addItem() {
  const produto = produtos[itemId % produtos.length];
  const cartItems = document.getElementById("cart-items");

  const itemDiv = document.createElement("div");
  itemDiv.className = "produto";

  itemDiv.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" class="imagem-produto">
    <div class="info-produto">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button onclick="removerItem(this, ${produto.preco})">Remover</button>
    </div>
  `;

  cartItems.appendChild(itemDiv);
  total += produto.preco;
  itemId++;

  atualizarTotal();
}

function removerItem(botao, preco) {
  botao.closest(".produto").remove();
  total -= preco;
  atualizarTotal();
}

function atualizarTotal() {
  document.getElementById("total").innerText = total.toFixed(2);
}

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
                </header>`;
    }}

    let total = 0;

// Função para carregar e mostrar os produtos do carrinho
window.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart-items");
  if (!cartItems) return; // se não tiver carrinho na página, não faz nada

  // Pega o carrinho do localStorage (array de produtos)
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  
  total = 0;
  cartItems.innerHTML = ""; // limpa itens antigos

  carrinho.forEach((produto, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "produto";

    itemDiv.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" class="imagem-produto">
      <div class="info-produto">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="removerItem(${index})">Remover</button>
      </div>
    `;

    cartItems.appendChild(itemDiv);
    total += produto.preco;
  });

  atualizarTotal();
});

// Função para remover item do carrinho pelo índice
function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  // Remove produto do array
  carrinho.splice(index, 1);

  // Atualiza o localStorage
  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  // Atualiza visual do carrinho e total
  atualizarCarrinhoVisual();
}

// Atualiza visual do carrinho após remoção
function atualizarCarrinhoVisual() {
  const cartItems = document.getElementById("cart-items");
  if (!cartItems) return;

  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  
  total = 0;
  cartItems.innerHTML = "";

  carrinho.forEach((produto, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "produto";

    itemDiv.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}" class="imagem-produto">
      <div class="info-produto">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="removerItem(${index})">Remover</button>
      </div>
    `;

    cartItems.appendChild(itemDiv);
    total += produto.preco;
  });

  atualizarTotal();
}

// Atualiza o valor total na página
function atualizarTotal() {
  const totalElement = document.getElementById("total");
  if (totalElement) {
    totalElement.innerText = total.toFixed(2);
  }
}

// Função para adicionar produto no carrinho (usar no HTML dos produtos)
function adicionarAoCarrinho(nome, preco, imagem) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  carrinho.push({ nome, preco, imagem });

  localStorage.setItem("carrinho", JSON.stringify(carrinho));

  // Redireciona para página carrinho
  window.location.href = "carrinho.html"; // ajuste se precisar
}
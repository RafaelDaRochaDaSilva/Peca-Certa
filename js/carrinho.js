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

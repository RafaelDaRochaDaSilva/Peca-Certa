let total = 0;
let count = 1;

function addItem() {
  const cart = document.getElementById('cart-items');
  const item = document.createElement('div');
  item.className = 'cart-item';

  const price = (Math.random() * 100 + 10).toFixed(2); // Preço aleatório

  item.innerHTML = `
    <p>Produto ${count}</p>
    <p>R$ ${price}</p>
    <button class="remove-btn">Remover</button>
  `;

  // Adiciona evento ao botão "Remover"
  item.querySelector('.remove-btn').addEventListener('click', function () {
    cart.removeChild(item);
    total -= parseFloat(price);
    document.getElementById('total').textContent = total.toFixed(2);
  });

  cart.appendChild(item);
  total += parseFloat(price);
  document.getElementById('total').textContent = total.toFixed(2);
  count++;
}

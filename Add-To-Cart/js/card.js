if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const renderCartProducts = () => {
  const container = document.getElementById('cart-products');
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    cartCount.textContent = "";
    cartTotal.textContent = "";
    return;
  }

  cartCount.textContent = `Items in Cart: ${cart.reduce((sum, item) => sum + item.quantity, 0)}`;

  container.innerHTML = cart.map(item => `
      <div class="col-md-4">
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top" alt="${item.title}" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">Brand: ${item.brand || 'N/A'}</p>
            <p class="card-text">Quantity: ${item.quantity}</p>
            <p class="card-text">Unit Price: $${item.price.toFixed(2)}</p>
            <p class="card-text fw-bold">Total: $${(item.price * item.quantity).toFixed(2)}</p>
            <button class="btn btn-danger btn-remove-item mt-auto" data-id="${item.id}">Remove</button>
          </div>
        </div>
      </div>
    `).join('');

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotal.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
};

const removeItem = (id) => {
  cart = cart.filter(item => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCartProducts();
};

document.addEventListener('click', e => {
  if (e.target.classList.contains('btn-remove-item')) {
    const id = parseInt(e.target.getAttribute('data-id'));
    removeItem(id);
  }
});

document.getElementById('clear-cart').addEventListener('click', () => {
  if (confirm('Clear the entire cart?')) {
    cart = [];
    localStorage.removeItem('cart');
    renderCartProducts();
  }
});

renderCartProducts();
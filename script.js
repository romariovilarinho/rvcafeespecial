
const cart = [];
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout');

// Atualiza o carrinho no HTML
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - ${item.quantity}x R$ ${item.price.toFixed(2)} 
            = R$ ${(item.price * item.quantity).toFixed(2)}
            <button class="remove-item" data-index="${index}">Remover</button>
        `;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Adiciona produto ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const name = product.dataset.name;
        const price = parseFloat(product.dataset.price);
        const quantity = parseInt(product.querySelector('.quantity').value) || 1;

        const existingProduct = cart.find(item => item.name === name);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.push({ name, price, quantity });
        }

        updateCart();
    });
});

// Remove item do carrinho
cartItems.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-item')) {
        const index = event.target.dataset.index;
        cart.splice(index, 1);
        updateCart();
    }
});

// Finaliza a compra (simulação local)
checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    // Simulação de processamento de pedido
    alert("Compra finalizada com sucesso! Obrigado por escolher RV Cafés Especiais.");
    cart.length = 0;
    updateCart();
});

// Reduzir dinamicamente todas as imagens para 25% do tamanho
document.querySelectorAll('.product-image').forEach(img => {
    img.style.width = '25%';
    img.style.height = 'auto';
});

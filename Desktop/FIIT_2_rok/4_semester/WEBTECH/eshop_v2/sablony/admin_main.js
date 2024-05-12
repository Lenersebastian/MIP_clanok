function updateCartCounter() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartCounter = document.getElementById('cartCounter');
    cartCounter.textContent = cart.length; // Update counter with the number of items in the cart
}
window.onload = function() {
    updateCartCounter();
    updateProductVisibility();
};
function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice }); // Store product name and price as an object
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCounter();
}
let currentPage = 1;
const productsPerPage = 6;

function showPreviousProducts() {
    currentPage = Math.max(currentPage - 1, 1);
    updateProductVisibility();
}

function showNextProducts() {
    const totalProducts = document.querySelectorAll('.product').length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    currentPage = Math.min(currentPage + 1, totalPages);
    updateProductVisibility();
}

function updateProductVisibility() {
    const products = document.querySelectorAll('.product');
    products.forEach((product, index) => {
        const startIdx = (currentPage - 1) * productsPerPage;
        const endIdx = startIdx + productsPerPage;
        if (index >= startIdx && index < endIdx) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

updateProductVisibility();
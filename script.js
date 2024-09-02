// Array to hold cart items
const cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    alert(`${productName} has been added to your cart.`);
}

// Optional: Function to view cart
function viewCart() {
    console.log('Cart:', cart);
}

// Array to hold cart items
const cart = [];

// Object to store reviews for each product
const reviews = {
    product1: [],
    product2: [],
    // Add entries for other products as needed
};

// Function to add items to the cart
function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    alert(`${productName} has been added to your cart.`);
    updateCartDisplay();
}

// Function to toggle the cart modal display
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
    updateCartDisplay();
}

// Function to update the cart display
function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsList.innerHTML = ''; // Clear previous cart items

    let totalPrice = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeFromCart(index);
        listItem.appendChild(removeButton);
        cartItemsList.appendChild(listItem);
        totalPrice += item.price;
    });

    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    cart.splice(index, 1); // Remove item at index
    updateCartDisplay();
}

// Function to clear the entire cart
function clearCart() {
    cart.length = 0; // Empty the cart array
    updateCartDisplay();
}

// Function to add a review
function addReview(event, productId) {
    event.preventDefault();
    const reviewInput = document.getElementById(`review-text-${productId}`);
    const reviewText = reviewInput.value.trim();

    if (reviewText) {
        reviews[productId].push(reviewText);
        reviewInput.value = ''; // Clear input field
        updateReviewsDisplay(productId); // Update review display
    }
}

// Function to update the reviews display
function updateReviewsDisplay(productId) {
    const reviewList = document.getElementById(`reviews-${productId}`);
    reviewList.innerHTML = ''; // Clear previous reviews

    reviews[productId].forEach(review => {
        const listItem = document.createElement('li');
        listItem.textContent = review;
        reviewList.appendChild(listItem);
    });
}

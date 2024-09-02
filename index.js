<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CraftyCommerce</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>CraftyCommerce</h1>
        <nav>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
            <!-- View Cart Button -->
            <button id="view-cart-btn" onclick="toggleCart()">View Cart</button>
        </nav>
    </header>

    <main>
        <section class="product-list">
            <!-- Example Product with Reviews Section -->
            <article class="product">
                <img src="product1.jpg" alt="Product 1">
                <h2>Product 1</h2>
                <p>$19.99</p>
                <button onclick="addToCart('Product 1', 19.99)">Add to Cart</button>

                <!-- Reviews Section -->
                <div class="reviews">
                    <h3>Customer Reviews</h3>
                    <ul id="reviews-product1" class="review-list"></ul>
                    <form onsubmit="addReview(event, 'product1')">
                        <input type="text" id="review-text-product1" placeholder="Write a review" required>
                        <button type="submit">Submit Review</button>
                    </form>
                </div>
            </article>
            
            <!-- Additional Products with Reviews Section -->
            <article class="product">
                <img src="product2.jpg" alt="Product 2">
                <h2>Product 2</h2>
                <p>$29.99</p>
                <button onclick="addToCart('Product 2', 29.99)">Add to Cart</button>

                <!-- Reviews Section -->
                <div class="reviews">
                    <h3>Customer Reviews</h3>
                    <ul id="reviews-product2" class="review-list"></ul>
                    <form onsubmit="addReview(event, 'product2')">
                        <input type="text" id="review-text-product2" placeholder="Write a review" required>
                        <button type="submit">Submit Review</button>
                    </form>
                </div>
            </article>

            <!-- Add more products as needed -->
        </section>
    </main>

    <!-- Cart Modal -->
    <div id="cart-modal" class="cart-modal">
        <div class="cart-content">
            <h2>Your Cart</h2>
            <ul id="cart-items"></ul>
            <p id="total-price">Total: $0.00</p>
            <button onclick="clearCart()">Clear Cart</button>
            <button onclick="toggleCart()">Close</button>
        </div>
    </div>

    <footer>
        <p>&copy; 2024 CraftyCommerce</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

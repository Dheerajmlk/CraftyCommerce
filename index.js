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
        </nav>
    </header>

    <main>
        <section class="product-list">
            <!-- Existing Products -->
            <article class="product">
                <img src="product1.jpg" alt="Product 1">
                <h2>Product 1</h2>
                <p>$19.99</p>
                <button onclick="addToCart('Product 1', 19.99)">Add to Cart</button>
            </article>
            <article class="product">
                <img src="product2.jpg" alt="Product 2">
                <h2>Product 2</h2>
                <p>$29.99</p>
                <button onclick="addToCart('Product 2', 29.99)">Add to Cart</button>
            </article>

            <!-- New Products -->
            <article class="product">
                <img src="product3.jpg" alt="Product 3">
                <h2>Product 3</h2>
                <p>$39.99</p>
                <button onclick="addToCart('Product 3', 39.99)">Add to Cart</button>
            </article>
            <article class="product">
                <img src="product4.jpg" alt="Product 4">
                <h2>Product 4</h2>
                <p>$49.99</p>
                <button onclick="addToCart('Product 4', 49.99)">Add to Cart</button>
            </article>
            <article class="product">
                <img src="product5.jpg" alt="Product 5">
                <h2>Product 5</h2>
                <p>$24.99</p>
                <button onclick="addToCart('Product 5', 24.99)">Add to Cart</button>
            </article>
            <article class="product">
                <img src="product6.jpg" alt="Product 6">
                <h2>Product 6</h2>
                <p>$34.99</p>
                <button onclick="addToCart('Product 6', 34.99)">Add to Cart</button>
            </article>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 CraftyCommerce</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(bodyParser.json());

let products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Smartphone', price: 499 },
  { id: 3, name: 'Headphones', price: 99 },
];

// Home Page Route
app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome to the E-Commerce Store</h1>
    <p>Browse our products by visiting <a href="/products">/products</a></p>
  `);
});

// Route to display all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Only start server if app.js is called directly (not when imported for testing)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

module.exports = app; // Export the app for testing
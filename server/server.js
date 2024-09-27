const express = require("express");
const app = express();
const session = require('express-session');
const port = 3002
;
const cors = require("cors");
const products = require('./data/Products');

app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );

app.get('/all-products', (req, res) => {
    const allProducts = [...products.Lotion, ...products.bodyWash, ...products.facescrub, ...products.lipScrub, ...products.moisturizer];
    
    if (allProducts.length === 0) {
      return res.status(404).json({ message: 'No products available' });
    }
    
    res.json(allProducts);
  });

  // Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
  
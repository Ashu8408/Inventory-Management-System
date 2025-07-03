const express = require("express");
const app = express();
const product = require("../controller/product");

app.get("/get/:userId", product.getAllProducts);
app.get("/delete/:id", product.deleteSelectedProduct);
app.get("/search", product.searchProduct);

app.post("/add", product.addProduct);
app.post("/update", product.updateSelectedProduct);

// http://localhost:4000/api/product/search?searchTerm=fa

module.exports = app;

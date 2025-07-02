const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema();


const Product = mongoose.model("product", ProductSchema);
module.exports = Product;

const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema();

const Sales = mongoose.model("sales", SaleSchema);
module.exports = Sales;

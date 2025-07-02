const mongoose = require("mongoose");

const PurchaseSchema = new mongoose.Schema();

const Purchase = mongoose.model("purchase", PurchaseSchema);
module.exports = Purchase;

const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema();

const Store = mongoose.model("store", StoreSchema);
module.exports = Store;

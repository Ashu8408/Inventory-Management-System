const express = require("express");
const app = express();
const purchase = require("../controller/purchase");

app.post("/add", purchase.addPurchase);

app.get("/get/:userID", purchase.getPurchaseData);
app.get("/get/:userID/totalpurchaseamount", purchase.getTotalPurchaseAmount);

module.exports = app;

// http://localhost:4000/api/purchase/add POST
// http://localhost:4000/api/purchase/get GET

const express = require("express");
const app = express();
const sales = require("../controller/sales");

app.post("/add", sales.addSales);

app.get("/get/:userID", sales.getSalesData);
app.get("/getmonthly", sales.getMonthlySales);
app.get("/get/:userID/totalsaleamount", sales.getTotalSalesAmount);

module.exports = app;



// http://localhost:4000/api/sales/add POST
// http://localhost:4000/api/sales/get GET

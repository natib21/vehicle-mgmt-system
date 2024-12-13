const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = express();

app.get("/api/car", (req, res) => {});
app.post("/api/car", (req, res) => {});
app.patch("/api/:id", (req, res) => {});
app.delete("/api/:id", (req, res) => {});

mongoose.connect(process.env.DATABASE).then(() => {
  console.log("Monogo Db Connected Successfully !!!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, (req, res) => {
  console.log(`this server Run on Server on port :${PORT}`);
});

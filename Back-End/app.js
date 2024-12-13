const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const carRoute = require("./router/carRoute");
dotenv.config({ path: "./config.env" });
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/car", carRoute);

mongoose.connect(process.env.DATABASE).then(() => {
  console.log("Monogo Db Connected Successfully !!!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`this server Run on Server on port :${PORT}`);
});

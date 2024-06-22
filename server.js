const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// 引入backend/routes
const goalRoute = require("./backend/routes/goalRoute");

app.use("/api/goals", goalRoute);

app.listen(PORT, () => {
  console.log(`Running on Port ${PORT}`);
});

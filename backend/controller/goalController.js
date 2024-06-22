const { model } = require("mongoose");
const getGoals = (req, res) => {
  res.status(200).json({ message: "Hello from server!" });
};
module.exports = {
  getGoals,
};

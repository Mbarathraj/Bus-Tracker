const Connection = () => {
  const mongoose = require("mongoose");

  mongoose.connect(process.env.DB_URL)
  console.log("Connected successfully");
};
module.exports = Connection;

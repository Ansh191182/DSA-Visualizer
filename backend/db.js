const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const monogo_URL = process.env.MONGO_URL;

const db = async () => {
  try {
    const databaseConnected = await mongoose.connect(monogo_URL);

    if (databaseConnected) {
      console.log("databse is connected");
    } else {
      console.log("database is not connected");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;

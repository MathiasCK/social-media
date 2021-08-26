const mongoose = require("mongoose");
const config = require("config");
const db = config.get("MONGO_URI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });
    console.log("MongoDB Connected ...");
  } catch (error) {
    console.log("Error connectig to database: ", error.message);
    process.exit(1); // Application fails
  }
};

module.exports = connectDB;

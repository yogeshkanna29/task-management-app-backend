const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Mongo DB Connected.");
  } catch (err) {
    console.error("Failed to connect to MongoDB.");
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
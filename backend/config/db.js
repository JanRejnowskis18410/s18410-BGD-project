const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://mongo:27017/chat", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;

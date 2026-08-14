const mongoose = require("mongoose");

// const { default: mongoose } = require("mongoose");

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to database");
    
  } catch (error) {
    console.log(err);
  }
}

module.exports = connectToDB;

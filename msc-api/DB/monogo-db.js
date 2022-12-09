require("dotenv").config();
const mongoose = require("mongoose");
const { db_uri, env } = require("../utility/config");

const connectToMongoDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const connected = await mongoose.connect(db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (env === "dev") {
      // eslint-disable-next-line no-console
      console.log(`Connected to Database: "${connected.connections[0].name}"`);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error connecting to mongo", error);
  }
};

module.exports = connectToMongoDB;

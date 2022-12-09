const mongoose = require("mongoose");

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;

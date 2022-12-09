const mongoose = require("mongoose");
const Contact = require("../modules/contacts/contact.model");
const connectToDB = require("../DB");

const contacts = [
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe1@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe2@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe3@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe4@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe5@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe6@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe7@gmail.com",
  },
  {
    name: "Jane Doe",
    email: "jane.doe8@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe9@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe10@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe11@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe12@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe13@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe14@gmail.com",
  },
  {
    name: "Jane Doe",
    address: "1234 sw 123Str Miami FL, 33155",
    phoneNumber: "305-345-6789",
    email: "jane.doe15@gmail.com",
  },
];

async function seedContacts() {
  connectToDB();

  Contact.create(contacts, (res, err) => {
    if (res) {
      console.clear(res);
    }
    if (err) {
      console.log(err);
    }
    mongoose.connection.close();
  });
}

seedContacts();

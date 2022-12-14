const mongoose = require("mongoose");
const Contact = require("../modules/contacts/contact.model");
const connectToDB = require("../DB");

const contacts = [
  {
    "name": "Jane Doe",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-345-6789",
    "email": "jane.doe@gmail.com"
  },
  {
    "name": "jimmy jones",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-567-6734",
    "email": "jimmy.jones2@gmail.com"
  },
  {
    "name": "james harding",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-567-1256",
    "email": "james.harding@gmail.com"
  },
  {
    "name": "taylor swift",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-346-4865",
    "email": "taytay4@gmail.com"
  },
  {
    "name": "luke skywalker",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-375-1136",
    "email": "masterluke@gmail.com"
  },
  {
    "name": "darth vader",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-236-4976",
    "email": "jane.doe6@gmail.com"
  },
  {
    "name": "john jones",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-785-6569",
    "email": "jjones@gmail.com"
  },
  {
    "name": "james bond",
    "email": "bondjamesbond@gmail.com"
  },
  {
    "name": "mark anthony",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-687-4559",
    "email": "mark@gmail.com"
  },
  {
    "name": "elvis presley",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-597-6569",
    "email": "theking10@gmail.com"
  },
  {
    "name": "Anakin Skywalker",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-265-9789",
    "email": "a.skywalker@gmail.com"
  },
  {
    "name": "steve jobs",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-2345-6789",
    "email": "steve.jobs12@gmail.com"
  },
  {
    "name": "steven jones",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-455-6789",
    "email": "sjones@gmail.com"
  },
  {
    "name": "lauren davis",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-565-8899",
    "email": "lauren.davis4@gmail.com"
  },
  {
    "name": "Leonardo DaVinci",
    "address": "1234 sw 123Str Miami FL, 33155",
    "phoneNumber": "305-215-6777",
    "email": "davinci@gmail.com"
  }
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

const express = require("express");

const router = express.Router();

const {
  getContacts,
  editContact,
  removeContact,
} = require("./contact.controllers");

router.get("/contact", getContacts);

router.put("/contact/:id", editContact);

router.delete("/contact/:id", removeContact);

module.exports = router;

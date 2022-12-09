const {
  getContactsService,
  editContactService,
  removeContactService,
} = require("./contact.services");

const getContacts = async (req, res, next) => {
  try {
    const contactsData = await getContactsService(req.query);

    if (contactsData.contacts.length) {
      res.status(200).json(contactsData);
    } else {
      res.status(200).json({ msg: "nothing found" });
    }
  } catch (error) {
    next(error);
  }
};

const editContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, address, phoneNumber, email } = req.body;
    const data = {};

    if (name) data.name = name;
    if (address) data.address = address;
    if (phoneNumber) data.phoneNumber = phoneNumber;
    if (email) data.email = email;

    const { updatedContact } = await editContactService(id, data);
    res.status(200).json(updatedContact);
  } catch (error) {
    next(error);
  }
};

const removeContact = async (req, res, next) => {
  try {
    const deletedContact = await removeContactService(req.params.id);
    res.status(200).json(deletedContact);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getContacts,
  editContact,
  removeContact,
};

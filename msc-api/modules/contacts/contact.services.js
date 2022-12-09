const { paginate } = require("../../utility/paginate");
const Contact = require("./contact.model");

const getContactsService = async ({ page, search }) => {
  try {
    const filters = search ? { $text: { $search: search.trim() } } : null;

    const contactsCount = await Contact.countDocuments(filters);

    const { skip, limit, pages, currentPage } = paginate(page, contactsCount);

    const contacts = await Contact.find(filters)
      .skip(skip)
      .limit(limit)
      .select("-__v");

    const contactData = {
      contacts,
      count: contactsCount,
      pages,
      currentPage,
    };

    return contactData;
  } catch (error) {
    return error;
  }
};

const editContactService = async (_id, data) => {
  try {
    const updatedContact = await Contact.findOneAndUpdate({ _id }, data, {
      new: true,
    }).select("-__v");

    return { updatedContact };
  } catch (error) {
    return error;
  }
};

const removeContactService = async (id) => {
  try {
    const deleted = await Contact.findByIdAndDelete({ _id: id }).select("-__v");
    return deleted;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getContactsService,
  editContactService,
  removeContactService,
};

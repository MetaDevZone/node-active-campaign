const { config } = require("./config");
const createContact = require("../src/apis/contacts/create_contact");
const deleteContact = require("../src/apis/contacts/delete_contact");
module.exports = {
  config,
  contact: {
    createContact,
    deleteContact,
  },
};

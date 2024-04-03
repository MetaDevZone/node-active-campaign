const { config } = require("./config");
const createContact = require("../src/apis/contacts/create_contact");
const deleteContact = require("../src/apis/contacts/delete_contact");
const addContactToList = require("../src/apis/contacts/add_contact_to_list");
const createTag = require("../src/apis/tags/create_a_tag");
const createContactTag = require("../src/apis/tags/add_a_tag_to_a_contact");
const createList = require("../src/apis/lists/create_list");
module.exports = {
  config,
  contact: {
    createContact,
    deleteContact,
    addContactToList,
  },
  tag: {
    createTag,
    createContactTag,
  },
  list: {
    createList,
  },
};

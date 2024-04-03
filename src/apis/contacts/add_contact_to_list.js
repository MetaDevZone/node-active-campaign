var getConfig = require("../../config").getConfig;
var axios = require("axios");

const addContactToList = async (data) => {
  try {
    // Fetching configuration data
    let { new_apiUrl, apiKey } = await getConfig();

    // Constructing the API endpoint URL for creat add contact to list
    let url = `${new_apiUrl}contactLists`;

    // Check if data is provided, is an object, and contains an email
    if (!data) {
      throw new Error("Data is required");
    } else if (typeof data !== "object") {
      throw new Error("Data should be an object");
    } else if (!data.contact) {
      throw new Error("Contact id is required");
    } else if (!data.list) {
      throw new Error("List id is required");
    } else if (!data.status) {
      throw new Error("Status is required");
    }

    // Wrapping data in a 'contactList' object as per API requirements
    let requestData = { contactList: data };

    // Making a POST request to create a new contact
    let response = await axios.post(url, requestData, {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": apiKey,
      },
    });

    return response; // Returning the response data
  } catch (error) {
    console.error("Error in adding contact to list:", error.message);
    throw error; // Re-throwing the error to be caught by the caller
  }
};

module.exports = addContactToList;

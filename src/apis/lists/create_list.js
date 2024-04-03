const getConfig = require("../../config").getConfig;
var axios = require("axios");

const createList = async (data) => {
  try {
    // Fetching configuration data
    let { new_apiUrl, apiKey } = await getConfig();

    // Constructing the API endpoint URL for creating contacts
    let url = `${new_apiUrl}lists`;

    if (!data) {
      throw new Error("Data is required");
    } else if (typeof data !== "object") {
      throw new Error("Data should be an object");
    } else if (!data.name) {
      throw new Error("Name is required");
    } else if (!data.stringid) {
      throw new Error("Stringid is required");
    } else if (!data.sender_url) {
      throw new Error("Sender URL is required");
    } else if (!data.sender_reminder) {
      throw new Error("Sender Reminder is required");
    } else if (!data.user) {
      throw new Error("User is required");
    }

    // Wrapping data in a 'contact' object as per API requirements
    let requestData = { list: data };

    // Making a POST request to create a new contact
    let response = await axios.post(url, requestData, {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": apiKey,
      },
    });

    return response; // Returning the response data
  } catch (error) {
    console.error("Error in createList:", error.message);
    throw error; // Re-throwing the error to be caught by the caller
  }
};

module.exports = createList;

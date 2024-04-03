var getConfig = require("../../config").getConfig;
var axios = require("axios");

const createTag = async (data) => {
  try {
    // Fetching configuration data
    let { new_apiUrl, apiKey } = await getConfig();

    // Constructing the API endpoint URL for creating contacts
    let url = `${new_apiUrl}tags`;

    // Check if data is provided, is an object, and contains an email
    if (!data) {
      throw new Error("Data is required");
    } else if (typeof data !== "object") {
      throw new Error("Data should be an object");
    } else if (!data.tag) {
      throw new Error("Tag is required");
    } else if (!data.tagType && data.tagType == "contact") {
      throw new Error("tagType is required and should be contact");
    }

    // Wrapping data in a 'contact' object as per API requirements
    let requestData = { tag: data };

    // Making a POST request to create a new contact
    let response = await axios.post(url, requestData, {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": apiKey,
      },
    });

    return response; // Returning the response data
  } catch (error) {
    console.error("Error in createTag:", error.message);
    throw error; // Re-throwing the error to be caught by the caller
  }
};

module.exports = createTag;

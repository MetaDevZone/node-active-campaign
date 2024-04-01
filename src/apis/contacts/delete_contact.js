var getConfig = require("../../config").getConfig;
var axios = require("axios");

const deleteContact = async (id) => {
  try {
    // Fetching configuration data
    let { new_apiUrl, apiKey } = await getConfig();

    // Constructing the API endpoint URL for creating contacts
    let url = `${new_apiUrl}contacts/${id}`;

    // Check if data is provided, is an object, and contains an email
    if (!id) {
      throw new Error("ID is required");
    }

    // Making a POST request to create a new contact
    let response = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
        "Api-Token": apiKey,
      },
    });

    return response; // Returning the response data
  } catch (error) {
    console.error("Error in deleteContact:", error.message);
    throw error; // Re-throwing the error to be caught by the caller
  }
};

module.exports = deleteContact;

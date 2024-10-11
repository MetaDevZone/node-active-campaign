//How to import package
const activeCampaign = require("@meta-dev-zone/node-active-campaign");

//set configuration

//During the configuration, you need to provide the API URL and API key. You can get the API URL and API key from your ActiveCampaign account. Here is an example of how to set the configuration:
try {
  await activeCampaign.config(
    "https://xxxxxxxxxxxxxxxxx.api-us1.com",
    "e43cdd65d06d299bcdf071e68d794c4a4692c2495b50674ebc91aab3c21ee225dc5f54de"
  );
} catch (error) {
  console.error("Failed to configure ActiveCampaign:", error);
}

//you can use variables from process.env
try {
  await activeCampaign.config(
    process.env.ACTIVE_CAMPAIGN_API_URL,
    process.env.ACTIVE_CAMPAIGN_API_KEY
  );
} catch (error) {
  console.error("Failed to configure ActiveCampaign:", error);
}

//*************************{contact functions}*************************//

// create contact
try {
  let create_contact = await activeCampaign.contact.createContact({
    email: "personone@gmail.com", //email of the contact
    firstName: "Person", //first name of the contact
    lastName: "One", //last name of the contact
    phone: "0440000000", //phone number of the contact
  });

  //you can use the response of the create contact in your system
} catch (error) {
  res.status(400).json({ error: error.message });
}

// delete contact
try {
  let delete_contact = await activeCampaign.contact.deleteContact(1); //pass id of the contact
} catch (error) {
  res.status(400).json({ error: error.message });
}

// add contact to list
try {
  let add_contact_to_list = await activeCampaign.contact.addContactToList({
    contact: 1, //id of the contact
    list: 1, //id of the list
    status: 1, //status of the contact
  });

  //you can use the response of the add contact to list in your system
} catch (error) {
  res.status(400).json({ error: error.message });
}

//*************************{tag functions}*************************//

// create tag
try {
  let create_tag = await activeCampaign.tag.createTag({
    tag: "Tag Name", //name of the tag
    tagType: "Tag Type", //type of the tag
    description: "Tag Description", //description of the tag
  });

  //you can use the response of the create tag in your system
} catch (error) {
  res.status(400).json({ error: error.message });
}

//add tag to a contact

try {
  let add_tag_to_contact = await activeCampaign.tag.createContactTag({
    contact: 1, //id of the contact
    tag: 1, //id of the tag
  });

  //you can use the response of the add tag to contact in your system
} catch (error) {
  res.status(400).json({ error: error.message });
}

//*************************{list functions}*************************//

// create list
try {
  let create_list = await activeCampaign.list.createList({
    name: "List Name", //name of the list
    stringid: "List String ID", //string id of the list
    sender_url: "Sender URL", //sender url of the list
    sender_reminder: "Reminder Message", //sender reminder of the list
    user: 1, //user id for the list
  });
  //you can use the response of the create list in your system
} catch (error) {
  res.status(400).json({ error: error.message });
}

//How to import package 
const activeCampaign = require('node-active-campaign');


//set configuration

//During the configuration, you need to provide the API URL and API key. You can get the API URL and API key from your ActiveCampaign account. Here is an example of how to set the configuration:
 await activeCampaign.config(
   "https://xxxxxxxxxxxxxxxxx.api-us1.com",
   "e43cdd65d06d299bcdf071e68d794c4a4692c2495b50674ebc91aab3c21ee225dc5f54de"
 );




//*************************{contact functions}*************************//

//create contact
await activeCampaign.contact.createContact({
  email: "",
  firstName: "",
  lastName: "",
  phone: "",
});

//delete contact
await activeCampaign.contact.deleteContact(1);

//add contact to list
await activeCampaign.contact.addContactToList({
  contact: 1,
  list: 1,
  status: 1,
});

//*************************{tag functions}*************************//

//create tag
await activeCampaign.tag.createTag({
  tag: "",
  tagType: "",
  description: "",
});

//add tag to a contact

await activeCampaign.tag.createContactTag({
  contact: 1,
  tag: 1,
});


//*************************{list functions}*************************//

//create list

await activeCampaign.list.createList({
  name: "",
  stringid: "",
  sender_url: "",
  sender_reminder: "",
  user: "",
});

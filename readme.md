# node-active-campaign package is a API wrapper for ActiveCampaign

**node-active-campaign** package is simple and easy to use for using the apis of **[ActiveCampaign](https://www.activecampaign.com/)**

# Current Status

**node-active-campaign** package is under development we will update time to time. Below in the table, You can check the function are available for different APIs implementation.

## Installation

Install using NPM:

    npm i @meta-dev-zone/node-active-campaign

If you don't use NPM, try this:

    git clone git://github.com:metadevzone/node-active-campaign.git
    node-active-campaign

## Requirements

You have ActiveCampaign API Access with **URL** and **Key**

## Available Functions

| Collection  | Functions                                            |
| ----------- | ---------------------------------------------------- |
| **index**   | `config`,                                            |
| **contact** | `createContact`, `deleteContact`, `addContactToList` |
| **list**    | `createList`                                         |
| **tag**     | `createTag`, `createContactTags`                     |

## How to use Functions

You can use the functions by importing the package and calling the functions. Below is the example of how to use the functions.

### Examples

You can find Test examples in
**node-active-campaign/src/test/index.js**

```javascript
//How to import package
const activeCampaign = require("@meta-dev-zone/node-active-campaign");

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
```

## Link to the package

link to the package [node-active-campaign](https://www.npmjs.com/package/@meta-dev-zone/node-active-campaign)

## Author

Meta Dev Zone – [meta-dev-zone](https://www.npmjs.com/~meta-dev-zone)

## Dependencies

| Package | Version | Dev |
| ------- | ------- | --- |
| axios   | ^1.6.8  | ✖   |

## Support

There is an email you can discuss any Issue or Query
[team@metadevzone.com](mailto:team@metadevzone.com)

## Versioning

All versions are `<major>.<minor>.<patch>` which will be incremented for
breaking backward compat and major reworks, new features without breaking
change, and bug fixes, respectively [Semantic
versioning](http://semver.org/).

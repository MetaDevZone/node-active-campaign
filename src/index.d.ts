//index.d.ts

//*********************{when hover function it show the function parameters and discription }******************//





//*******************************************{Configuration}********************************************//
/**
 * Configuration for ActiveCampaign
 * @function
 * @param {string} apiKey - API key for ActiveCampaign
 * @param {string} apiUrl - API URL for ActiveCampaign
 * @returns {void} - Does not return anything
 * @description This function configures the connection to ActiveCampaign using the provided API key and URL. 
 */


export function config(apiKey: string, apiUrl: string): void;


//*******************************************{Contacts}********************************************//
export namespace contact {
   
   /**
 * Creates a contact in ActiveCampaign
 * @function
 * @param {string} email - Email address of the contact
 * @param {string} firstName - First name of the contact
 * @param {string} lastName - Last name of the contact
 * @param {number} phone - Phone number of the contact
 * @returns {Promise<any>} - Promise that resolves on successful contact creation
 * @description This function creates a new contact in ActiveCampaign with the provided details.
 */
  export function createContact(email: string, firstName?: string, lastName?: string, phone?: number): Promise<any>;

  /**
 * Deletes a contact from ActiveCampaign
 * @function
 * @param {number} contactId - ID of the contact to delete
 * @returns {Promise<any>} - Promise that resolves to true on successful deletion, false otherwise
 * @description This function deletes a contact from ActiveCampaign based on the provided contact ID.
 */
  export function deleteContact(contactId: number): Promise<any>; // Use Promise<void> if nothing is returned


/**
 * add contact to list in ActiveCampaign
 * @function
 * @param {object} data - Data object containing contact details
 * @param {number} data.contact - ID of the contact to add to the list
 * @param {number} data.list - ID of the list to add the contact to
 * @param {boolean} data.status - Status of the contact in the list
 * @returns {Promise<any>} - Promise that resolves on successful contact addition to the list
 * @description This function adds a contact to a list in ActiveCampaign with the provided details.
 */

  export function addContactToList(data:{contact: number, list: number, status: boolean}): Promise<any>;
  




}



//*******************************************{Tags }************************************************//


export namespace tag {
  /**
 * Adds a tag to a contact in ActiveCampaign
 * @function
 * @param {string} tag - Tag for creating a new tag
 * @param {string} tagType - Type of tag to create & shoud be either 'contact'
 * @param {string} description - Description of the tag
 * @returns {Promise<any>} - Promise that resolves on successful tag creation
 * @description This function creates a new tag in ActiveCampaign with the provided details.
 * 
 */
  export function createTag(tag: string, tagType: string, description?: string): Promise<any>;
  
/**
 * Add a tag to a contact
 * @function
 * @param {string} contact - ID of the contact to tag
 * @param {string} tag - ID of the tag 
 * @returns {Promise<any>} - Promise that resolves on successful tag creation
 * @description This function adds a tag to a contact in ActiveCampaign.
 */

  export function createContactTag(contact: string, tag: string): Promise<any>;




}

export namespace list {

/**
 * createList function
 * @function
 * @param {object} data - Data object containing list details
 * @param {string} data.name - Name of the list
 * @param {string} data.stringid - String ID of the list
 * @param {string} data.sender_url - Sender URL of the list
 * @param {string} data.sender_reminder - Sender Reminder of the list
 * @param {number} data.user - User of the list
 * @returns {Promise<any>} - Promise that resolves on successful list creation
 * @description This function creates a new list in ActiveCampaign with the provided details.
 * 
 */

export function createList(data: {
  name: string;
  stringid: string;
  sender_url: string;
  sender_reminder: string;
  user: number;
}): Promise<any>;

}
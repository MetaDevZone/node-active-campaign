//index.d.ts
/**
 * Configuration for ActiveCampaign
 * @function
 * @param {string} apiKey - API key for ActiveCampaign
 * @param {string} apiUrl - API URL for ActiveCampaign
 * @returns {void} - Does not return anything
 * @description This function configures the connection to ActiveCampaign using the provided API key and URL. 
 */


export function config(apiKey: string, apiUrl: string): void;

export namespace contact {
   
   /**
 * Creates a contact in ActiveCampaign
 * @function
 * @param {string} email - Email address of the contact
 * @param {string} firstName - First name of the contact
 * @param {string} lastName - Last name of the contact
 * @param {number} phone - Phone number of the contact (optional)
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
}


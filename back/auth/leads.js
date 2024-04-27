const { client } = require('./index'); // Import the client from index.js

const createDeal = async (formData) => {
    const {
        contactName,
        contactPhone,
        leadDestination,
        leadVisaCategory,
    } = formData;

    const contact = new client.Contact({
        name: contactName,
        first_name: contactName,

        custom_fields_values: [
            { field_id: 770109, values: [{ value: contactPhone }] }, 
        ],
    });
    await contact.save();
    
    console.log(contact);
    
    // Create a new lead
    const lead = new client.Lead({
        name: 'Новая сделка с ' + contactName+ ". Телефон " + contactPhone,
        custom_fields_values: [
            { field_id: 770321, values: [{ value: leadDestination }] },
            { field_id: 770323, values: [{ value: leadVisaCategory }] }, 
            { field_id: 770331, values: [{ value: 'Сайт - Форма анкета' }] }, 

        ],
    });
    // Add the contact to the lead's embeddedContacts
    lead.embeddedContacts.add([
        {
            id: contact.id,
            is_main: true, // Set to true if this is the main contact for the deal
        },
    ]);

    // Save the lead again to update the changes
    await lead.save();
};

module.exports = { createDeal };




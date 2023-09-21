
  import { listContacts, getContactById, addContact, removeContact } from './contacts.js';

  (async () => {
  try {
    
    const contacts = await listContacts();
    console.log('contacts.json:', contacts);

    
    const contactId = 1; 
    const contact = await getContactById(contactId);
    console.log('contacts.json:', contact);

    
    const contactIdToDelete = 2; 
    const deletedContact = await removeContact(contactIdToDelete);
    console.log('contacts.json:', deletedContact);

    
    const newContact = await addContact('Имя', 'email@example.com', '123456789');
    console.log('contacts.json:', newContact);
  } catch (error) {
    console.error('contacts.json:', error);
  }
})();




  

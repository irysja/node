import { program } from 'commander';
import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from './contacts.js';

program.version('1.0.0').description('Contact Management System');

program
  .command('list')
  .description('List all contacts')
  .action(async () => {
    try {
      const contacts = await listContacts();
      console.table(contacts);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

program
  .command('get <id>')
  .description('Get a contact by ID')
  .action(async (id) => {
    try {
      const contact = await getContactById(id);
      if (contact) {
        console.table([contact]);
      } else {
        console.log(`Contact with ID ${id} not found.`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

program
  .command('add <name> <email> <phone>')
  .description('Add a new contact')
  .action(async (name, email, phone) => {
    try {
      const newContact = await addContact(name, email, phone);
      console.log('New contact added:');
      console.table([newContact]);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

program
  .command('remove <id>')
  .description('Remove a contact by ID')
  .action(async (id) => {
    try {
      const removedContact = await removeContact(id);
      if (removedContact) {
        console.log('Removed contact:');
        console.table([removedContact]);
      } else {
        console.log(`Contact with ID ${id} not found.`);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

program.parse(process.argv);






  

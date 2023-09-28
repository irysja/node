
import { program } from 'commander';
import {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} from './contacts.js';

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      try {
        const contacts = await listContacts();
        console.table(contacts);
      } catch (error) {
        console.error('Error:', error.message);
      }
      break;

      case 'get':
        try {
          const contact = await getContactById(id);
          console.log('Contact found:');
          console.log(contact); 
        } catch (error) {
          console.error('Error:', error.message);
        }
        break;
      

case 'add':
  try {
    const newContact = await addContact(name, email, phone);
    console.log('New contact added:');
    console.log(newContact); 
  } catch (error) {
    console.error('Error:', error.message);
  }
  break;

  case 'remove':
    const removedContact = await removeContact(id);
    console.log('Removed contact:');
    console.log(removedContact); 
    break;
  


    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);





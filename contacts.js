import { promises as fsPromises } from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';

const currentDirPath = path.resolve();
const contactsPath = path.join(currentDirPath, 'db', 'contacts.json');

async function listContacts() {
  try {
    const data = await fsPromises.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    throw error;
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((c) => c.id === contactId);
    return contact || null;
  } catch (error) {
    throw error;
  }
}

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const index = contacts.findIndex((c) => c.id === contactId);
    if (index === -1) {
      return null;
    }
    const removedContact = contacts.splice(index, 1)[0];
    await fsPromises.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return removedContact;
  } catch (error) {
    throw error;
  }
}

async function addContact(name, email, phone) {
  try {
    const contacts = await listContacts();
    const newContact = { id: nanoid(10), name, email, phone };
    contacts.push(newContact);
    await fsPromises.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;
  } catch (error) {
    throw error;
  }
}

export { listContacts, getContactById, removeContact, addContact };












import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { EmptyContactList } from './EmptyContactList/EmptyContactList.styled';
import {
  Container,
  MainHeader,
  SectionHeader,
} from './Container/Container.styled';

// import initialContacts from 'data/initialContacts.json';

// ===========================================================

const initialContacts = () => {
  const savedContacts = localStorage.getItem('savedContacts');
  if (savedContacts) {
    return JSON.parse(savedContacts);
  }
  return '';
};

export const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('savedContacts', JSON.stringify(contacts));
  }, [contacts]);

  const checkNewContact = newContact => {
    return contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  const addContact = newContact => {
    if (checkNewContact(newContact)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
    toast.success(`Contact ${newContact.name} was added!`);
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
    toast.success('Contact was deleted!');
  };

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  return (
    <Container>
      <MainHeader>Phonebook</MainHeader>
      <ContactForm onAddContact={addContact} />

      <SectionHeader>Contacts</SectionHeader>
      <Filter filter={filter} onChangeFilter={changeFilter} />
      {contacts.length ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <EmptyContactList>Contacts list is empty</EmptyContactList>
      )}
      <Toaster position="top-right" />
    </Container>
  );
};

import { List } from './ContactList.styled';
import { ContactCard } from 'components/ContactCard/ContactCard';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(contact => (
      <li key={contact.id}>
        <ContactCard contact={contact} onDeleteContact={onDeleteContact} />
      </li>
    ))}
  </List>
);

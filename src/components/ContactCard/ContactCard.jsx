import { ContactContainer, DeleteBtn } from './ContactCard.styled';
import { BsPersonFillX } from 'react-icons/bs';

export const ContactCard = ({
  contact: { id, name, number },
  onDeleteContact,
}) => (
  <ContactContainer>
    <div>
      <p>
        {name}: <span>{number}</span>
      </p>
    </div>
    <DeleteBtn onClick={() => onDeleteContact(id)}>
      <BsPersonFillX />
      Delete
    </DeleteBtn>
  </ContactContainer>
);

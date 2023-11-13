import { Formik } from 'formik';
import { object, string, number } from 'yup';
import { BsPersonPlusFill } from 'react-icons/bs';

import {
  StyledForm,
  Label,
  Input,
  ErrorMsg,
  AddBtn,
} from './ContactForm.styled';

const contactSchema = object().shape({
  name: string().required('Please enter name'),
  number: number()
    .typeError('Please enter only numbers')
    .required('Please enter phone number'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onAddContact }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values);
        resetForm();
      }}
    >
      <StyledForm autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input id="name" type="text" name="name" />
          <ErrorMsg name="name" component="span" />
        </Label>
        <Label htmlFor="number">
          <span>Number</span>
          <Input id="number" type="tel" name="number" />
          <ErrorMsg name="number" component="span" />
        </Label>
        <AddBtn type="submit">
          <BsPersonPlusFill size={32} />
          Add contact
        </AddBtn>
      </StyledForm>
    </Formik>
  );
};

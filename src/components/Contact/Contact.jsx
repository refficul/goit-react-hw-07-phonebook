// import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { Button, FormStyled } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'api/api';

// const FormValidSchema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .matches(
//       /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
//       "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//     )
//     .required('Required'),
//   number: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .matches(
//       /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
//       'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
//     )
//     .required('Required'),
// });

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      // validationSchema={FormValidSchema}
      onSubmit={handleSubmit}
    >
      <FormStyled>
        <label htmlFor="Name">Name</label>
        <Field type="text" name="name" />
        <label htmlFor="Number">Number</label>
        <Field type="tel" name="number" />
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};
import ContactMeForm from 'domain/contact_me/types/ContactMeForm';
import ContactMeFormErrors from 'domain/contact_me/types/ContactMeFormErrors';

const SINGLE_LINE_MAX_LENGTH = 256;
const MULTI_LINE_MAX_LENGTH = 65536;

const validateContactMeForm = (form: ContactMeForm) => {
  const errors: ContactMeFormErrors = {};

  const { name = '', contact = '', message = '' } = form;

  if (!name.trim()) errors.name = 'Name should not be empty';
  if (name.trim().length > SINGLE_LINE_MAX_LENGTH)
    errors.name = `Name length should not be greater than ${SINGLE_LINE_MAX_LENGTH} characters`;

  if (!contact.trim()) errors.contact = 'Contact should not be empty';
  if (contact.trim().length > SINGLE_LINE_MAX_LENGTH)
    errors.contact = `Contact length should not be greater than ${SINGLE_LINE_MAX_LENGTH} characters`;

  if (!message.trim()) errors.message = 'Message should not be empty';
  if (message.trim().length > MULTI_LINE_MAX_LENGTH)
    errors.message = `Message length should not be greater than ${MULTI_LINE_MAX_LENGTH} characters`;

  if (!Object.keys(errors).length) return null;
  return errors;
};

export default validateContactMeForm;

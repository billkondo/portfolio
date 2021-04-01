import ContactMeForm from 'domain/contact_me/types/ContactMeForm';
import ContactMeFormErrors from 'domain/contact_me/types/ContactMeFormErrors';

const validateContactMeForm = (form: ContactMeForm) => {
  const errors: ContactMeFormErrors = {};

  if (!form.name) errors.name = 'Name should not be empty';
  if (!form.contact) errors.contact = 'Contact should not be empty';
  if (!form.message) errors.message = 'Message should not be empty';

  if (!Object.keys(errors).length) return null;
  return errors;
};

export default validateContactMeForm;

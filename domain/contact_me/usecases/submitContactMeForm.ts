import ContactMeForm from 'domain/contact_me/types/ContactMeForm';
import ContactMeFormErrors from 'domain/contact_me/types/ContactMeFormErrors';

import validateContactMeForm from 'domain/contact_me/usecases/validateContactMeForm';

import ContactMeService from 'services/contact_me';

const submitContactMeForm = async (form: ContactMeForm) => {
  if (!form) throw new Error('form cannot not be empty');

  const errors = validateContactMeForm(form);
  if (errors) throw new ValidationError(errors);

  await ContactMeService.sendMessage(form);
};

export class ValidationError {
  errors: ContactMeFormErrors;

  constructor(errors: ContactMeFormErrors) {
    this.errors = errors;
  }
}

export default submitContactMeForm;

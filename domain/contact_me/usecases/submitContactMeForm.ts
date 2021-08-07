import ContactMeForm from 'domain/contact_me/types/ContactMeForm';

import ContactMeService from 'services/contact_me';

const submitContactMeForm = async (form: ContactMeForm) => {
  if (!form) throw new Error('form cannot not be empty');

  await ContactMeService.sendMessage(form);
};

export default submitContactMeForm;

import ContactMeForm from 'domain/contact_me/types/ContactMeForm';

import { sendMessageFunction } from 'services/firebase';

const sendMessage = async (form: ContactMeForm) => {
  await sendMessageFunction(form);
};

export default sendMessage;

import * as functions from 'firebase-functions';

type Form = {
  name: string;
  contact: string;
  message: string;
};

const SINGLE_LINE_MAX_LENGTH = 256;
const MULTI_LINE_MAX_LENGTH = 65536;

const isFormValid = (form: Form) => {
  const { name = '', contact = '', message = '' } = form;

  if (!name.trim() || name.trim().length > SINGLE_LINE_MAX_LENGTH) return false;
  if (!contact.trim() || contact.trim().length > SINGLE_LINE_MAX_LENGTH)
    return false;
  if (!message.trim() || message.trim().length > MULTI_LINE_MAX_LENGTH)
    return false;

  return true;
};

export const call = functions.https.onCall((data) => {
  const { form } = data;

  if (!form)
    throw new functions.https.HttpsError(
      'invalid-argument',
      'form cannot be empty'
    );

  if (!isFormValid(form))
    throw new functions.https.HttpsError('invalid-argument', 'form is invalid');
});

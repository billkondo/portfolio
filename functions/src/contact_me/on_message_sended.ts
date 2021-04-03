import * as functions from 'firebase-functions';

import { CONTACT_ME_COLLECTION } from '../AdminSDK';

import sendEmail from '../services/sendEmail';

export const listener = functions.firestore
  .document(`${CONTACT_ME_COLLECTION}/{docID}`)
  .onCreate(async (snapshot) => {
    const data = snapshot.data();

    const { name, contact, message } = data;

    await sendEmail(name, contact, message);
  });

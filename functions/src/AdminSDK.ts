import * as FirebaseAdmin from 'firebase-admin';

import AdminSDKConfig from './config/AdminSDKConfig.json';

const CONTACT_ME_COLLECTION = 'contact_me';

export const initSDK = () => {
  const adminSDKConfig = AdminSDKConfig as FirebaseAdmin.ServiceAccount;

  FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert(adminSDKConfig),
  });
};

export const Timestamp = () =>
  FirebaseAdmin.firestore.FieldValue.serverTimestamp();

export const ContactMeCollection = () =>
  FirebaseAdmin.firestore().collection(CONTACT_ME_COLLECTION);

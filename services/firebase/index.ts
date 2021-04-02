import Firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/functions';

import { isDev, isProd } from 'config/environment';
import FirebaseConfig from 'config/firebase_config';

import ContactMeForm from 'domain/contact_me/types/ContactMeForm';

export const initFirebase = () => {
  Firebase.initializeApp(FirebaseConfig);
  if (!isDev) Firebase.analytics();
};

const Functions = () => {
  const FirebaseFunctions = Firebase.functions();

  if (!isProd) FirebaseFunctions.useEmulator('localhost', 5001);

  return FirebaseFunctions;
};

export const sendMessageFunction = async (form: ContactMeForm) => {
  const func = Functions().httpsCallable('sendMessage');
  return await func({ form });
};

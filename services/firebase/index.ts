import Firebase from 'firebase/app';

import firebaseConfig from 'config/firebase_config.json';

import 'firebase/analytics';

export const initFirebase = () => {
  Firebase.initializeApp(firebaseConfig);
  Firebase.analytics();
};

import Firebase from 'firebase/app';

import FirebaseConfig from 'config/firebase_config';

import 'firebase/analytics';

export const initFirebase = () => {
  Firebase.initializeApp(FirebaseConfig);
  Firebase.analytics();
};

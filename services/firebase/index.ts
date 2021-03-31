import Firebase from 'firebase/app';

import { isDev } from 'config/environment';
import FirebaseConfig from 'config/firebase_config';

import 'firebase/analytics';

export const initFirebase = () => {
  Firebase.initializeApp(FirebaseConfig);
  if (!isDev) Firebase.analytics();
};

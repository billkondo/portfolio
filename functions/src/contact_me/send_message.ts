import * as functions from 'firebase-functions';

export const call = functions.https.onCall((data, context) => {
  console.log(data);
  console.log(context);
});

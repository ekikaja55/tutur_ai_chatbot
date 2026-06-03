import {
  PRIVATE_FIREBASE_PROJECT_ID,
  PRIVATE_FIREBASE_CLIENT_EMAIL,
  PRIVATE_FIREBASE_PRIVATE_KEY,
} from "$env/static/private";
import admin from "firebase-admin";

//sekali jalan jangan ada init double
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: PRIVATE_FIREBASE_PROJECT_ID,
      clientEmail: PRIVATE_FIREBASE_CLIENT_EMAIL,
      privateKey: PRIVATE_FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

export const dbAdmin = admin.firestore();
export const authAdmin = admin.auth();

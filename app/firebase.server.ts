import { getAuth, Auth } from "firebase-admin/auth";
import { App, initializeApp, getApps, cert, getApp } from "firebase-admin/app";

let app: App;
let auth: Auth;

if (getApps().length === 0) {
  const serviceAccount = require("~/firebase-service-account.json");
  serviceAccount.private_key_id = process.env.FIREBASE_PRIVATE_KEY_ID;
  serviceAccount.private_key = process.env.FIREBASE_PRIVATE_KEY;

  app = initializeApp({
    credential: cert(serviceAccount),
  });

  auth = getAuth(app);
} else {
  app = getApp();
  auth = getAuth(app);
}

export { app, auth };

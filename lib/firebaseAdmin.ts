import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getFirebaseAdminApp() {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  const serviceAccountBase64 =
    process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;

  if (!serviceAccountBase64) {
    throw new Error(
      "FIREBASE_SERVICE_ACCOUNT_BASE64 is missing from .env.local"
    );
  }

  let serviceAccount: {
    project_id: string;
    client_email: string;
    private_key: string;
  };

  try {
    const json = Buffer.from(
      serviceAccountBase64,
      "base64"
    ).toString("utf8");

    serviceAccount = JSON.parse(json);
  } catch (error) {
    console.error(
      "Failed to decode Firebase service account:",
      error
    );

    throw new Error(
      "Invalid FIREBASE_SERVICE_ACCOUNT_BASE64"
    );
  }

  return initializeApp({
    credential: cert({
      projectId: serviceAccount.project_id,

      clientEmail: serviceAccount.client_email,

      privateKey: serviceAccount.private_key,
    }),
  });
}

const firebaseAdminApp = getFirebaseAdminApp();

export const adminDb =
  getFirestore(firebaseAdminApp);
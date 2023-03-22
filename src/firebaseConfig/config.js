import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyActddZRAwVGcXwaNZBILmBDgm7jI_00gM",
  authDomain: "mastercraft-40507.firebaseapp.com",
  projectId: "mastercraft-40507",
  storageBucket: "mastercraft-40507.appspot.com",
  messagingSenderId: "835045744522",
  appId: "1:835045744522:web:937f32d684551826e3f273",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default app
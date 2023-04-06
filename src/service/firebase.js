import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/config";
import { getAuth } from "firebase/auth";



// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const firebaseAuth = getAuth(app);


import { firebaseConfig } from "./../lib/constants";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { initializeApp } from "firebase/app";


export const firebaseApp = initializeApp(firebaseConfig);


export const authFirebase = getAuth(firebaseApp);


setPersistence(authFirebase, browserLocalPersistence);

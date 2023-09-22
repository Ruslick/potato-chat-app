import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './../lib/constants';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp(firebaseConfig);

export const authFirebase = getAuth(firebaseApp);

export const firestoreApp = getFirestore(firebaseApp);

setPersistence(authFirebase, browserLocalPersistence);

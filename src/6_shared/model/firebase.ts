import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './../lib/constants';

export const firebaseApp = initializeApp(firebaseConfig);

export const authFirebase = getAuth(firebaseApp);

setPersistence(authFirebase, browserLocalPersistence);

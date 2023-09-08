import { authFirebase, firebaseApp } from "./model/firebase";
import { Loader } from "./ui/loader.component";
import { firebaseConfig } from "./api/constants/constants";
import { useAppDispatch, useAppSelector } from "./model/hooks";


export { useAppDispatch, useAppSelector, firebaseConfig };
export { firebaseApp, authFirebase };
export { Loader };

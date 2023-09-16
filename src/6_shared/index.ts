import { FormStyled } from "./ui/form.styled";
import { authFirebase, firebaseApp } from "./model/firebase";
import { Loader } from "./ui/loader.component";
import { useAppDispatch, useAppSelector } from "./model/hooks";
import { firebaseConfig } from "./lib/constants";

export { useAppDispatch, useAppSelector, firebaseConfig };
export { firebaseApp, authFirebase };
export { Loader };
export { FormStyled };

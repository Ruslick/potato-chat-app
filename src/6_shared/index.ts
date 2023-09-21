import { Loader } from './ui/loader/loader.component';
import { Modal } from './ui/modal/modal.component';
import { FormStyled } from './ui/form/form.styled';
import { authFirebase, firebaseApp } from './model/firebase';
import { useAppDispatch, useAppSelector } from './model/storeHooks';
import { firebaseConfig } from './lib/constants';
import { useModal } from './model/modalHook';

export { useAppDispatch, useAppSelector, firebaseConfig };
export { firebaseApp, authFirebase };
export { Loader };
export { FormStyled };
export { Modal, useModal };

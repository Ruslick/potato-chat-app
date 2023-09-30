import { Loader } from './ui/loader/loader.component';
import { Modal } from './ui/modal/modal.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { TopMenuComponent } from './ui/top-menu/top-menu.component';
import { FormStyled } from './ui/form/form.styled';
import { authFirebase, firebaseApp, firestoreApp } from './model/firebase';
import { useAppDispatch, useAppSelector } from './model/storeHooks';
import { firebaseConfig } from './lib/constants';
import { useModal } from './model/modalHook';

export { useAppDispatch, useAppSelector, firebaseConfig };
export { firebaseApp, authFirebase, firestoreApp };
export { Loader };
export { LayoutComponent };
export { TopMenuComponent };
export { FormStyled };
export { Modal, useModal };

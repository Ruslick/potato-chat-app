import { EmailVerificationModal } from './email-verification-modal/ui/email-verification-miodal.component';
import { UsernameFormComponent } from './auth-forms/username-form/ui/username-form';
import { ResetFormComponent } from './auth-forms/reset-form/ui/reset-form';
import { RegisterFormComponent } from './auth-forms/register-form/ui/register-form';
import { LoginFormComponent } from './auth-forms/login-form/ui/login-form';

import { Logout } from './logout/ui/logout.component';

export {
  Logout as LogoutFeature,
  LoginFormComponent as LoginFeature,
  RegisterFormComponent as RegisterFeature,
  ResetFormComponent as ResetFeature,
  UsernameFormComponent as UsernameFeature,
  EmailVerificationModal as EmailVerificationFeature
};

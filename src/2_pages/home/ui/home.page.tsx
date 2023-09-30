import { FC } from 'react';
import { useIdToken } from 'react-firebase-hooks/auth';
import { LogoutFeature } from '../../../4_features/auth-features';
import { TopMenuComponent, authFirebase } from '../../../6_shared';
// import { Link } from 'react-router-dom';
import { Button } from '../../../6_shared/ui/button/button.component';
import SvgHamburger from '../../../6_shared/ui/icon/assets/hamburger';
import { globalTheme } from '../../../6_shared/lib/global.theme';

export const HomePage: FC = () => {
  if (!authFirebase.currentUser) throw new Error('No user');
  const [user] = useIdToken(authFirebase);

  if (!user) throw new Error('No user');

  // const [data] = useCollection(
  //   query(collection(firestoreApp, 'messages'), where('users', 'array-contains', user.uid))
  // );

  return (
    <>
      <TopMenuComponent>
        <Button width='40px' height='30px' padding='0'>
          <SvgHamburger
            width={35}
            height={18}
            stroke={globalTheme.colors.primary.white}
            strokeWidth={4}
          />
        </Button>
        <p style={{ fontFamily: globalTheme.fonts[1], color: 'white', fontSize: '30px' }}>
          Messages
        </p>
      </TopMenuComponent>
      <p style={{ fontFamily: globalTheme.fonts[1], color: '#CB997E', fontSize: '35px' }}>
        You don't have any chats yet...
      </p>
      {/* <p>Welcome, {authFirebase.currentUser.displayName}</p> */}
      {!user.emailVerified && <p>Email {user.email} not verified</p>}

      {/* <Link to={'/search'}>
        <Button>Add contact</Button>
      </Link>
      <Link to={'/chats'}>
        <Button>Chats</Button>
      </Link> */}
      <LogoutFeature />
    </>
  );
};

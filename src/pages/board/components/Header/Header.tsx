import React from 'react';
import { Button } from 'src/components/Button/Button';
import {
  Collapse, Expand, Logo, Logout,
} from 'src/components/Icons';
import { UserInfo } from 'src/components/UserInfo/UserInfo';
import { authContext } from 'src/pages/auth/AuthProvider';
import styles from './header.module.css';
import { useFullscreen } from './useFullscreen';

export const Header = () => {
  const { account: { user }, logout } = React.useContext(authContext);
  const { isFull, toggle } = useFullscreen();

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Logo className={styles.logo} />
        <span className={styles.title}>
          API-консолька
        </span>
      </div>
      <div className={styles.right}>
        <UserInfo login={user.account} sublogin={user.sublogin} />
        <Button invert onClick={logout}>
          Выйти
          <Logout />
        </Button>
        <Button invert onClick={toggle}>
          { isFull ? <Collapse /> : <Expand /> }
        </Button>
      </div>
    </div>
  );
};

import React from 'react';
import styles from './user-info.module.css';

export interface UserInfoProps {
  login: string,
  sublogin?: string
}

export const UserInfo = ({
  login,
  sublogin,
}: UserInfoProps) => (
  <div className={styles.user}>
    {login}
    {
      sublogin && [' ', <span style={{ opacity: 0.2 }}>&nbsp;:&nbsp;</span>, sublogin]
    }
  </div>
);

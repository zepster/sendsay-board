import React from 'react';
import styles from './sign.module.css';

export interface SignProps {
  children: React.ReactNode,
}

export const Sign = (props: SignProps) => (
  <div className={styles.sign} {...props} />
);

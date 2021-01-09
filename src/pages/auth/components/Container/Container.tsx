import React from 'react';
import { Logo } from 'src/components/Icons';
import { Sign } from 'src/components/Sign/Sign';
import styles from './container.module.css';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <div className={styles.content}>
      {children}
    </div>
    <Sign>@tot</Sign>
  </div>
);

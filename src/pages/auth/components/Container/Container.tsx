import React from 'react';
import { Logo } from '@/components/Icons';
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
    <div className={styles.footer}>
      @tot
    </div>
  </div>
);

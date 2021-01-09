import React from 'react';
import styles from './container.module.css';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = (props: ContainerProps) => (
  <div className={styles.container} {...props} />
);

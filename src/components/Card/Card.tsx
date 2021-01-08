import React from 'react';
import styles from './card.module.css';

export interface CardProps {
  header: React.ReactNode,
  children: React.ReactNode,
}

export const Card = ({
  children,
  header,
}: CardProps) => (
  <div className={styles.card}>
    <div className={styles.header}>{header}</div>
    <div className={styles.body}>
      {children}
    </div>
  </div>
);

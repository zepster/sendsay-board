import React from 'react';
import styles from './inner.module.css';

export interface InnerNotifyProps {
  onEnd?: () => void;
  text: string;
}

export const Inner = ({ onEnd, text }: InnerNotifyProps) => (
  <div className={styles.container}>
    <div
      onAnimationEnd={onEnd}
      className={styles.notify}
    >
      {text}
    </div>
  </div>
);

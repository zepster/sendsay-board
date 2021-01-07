import React from 'react';
import styles from './inner.module.css';

interface NotifyProps {
  onEnd: () => void;
  text: string;
}

export const Notify = ({ onEnd, text }: NotifyProps) => (
  <div className={styles.container}>
    <div
      onAnimationEnd={onEnd}
      className={styles.notify}
    >
      {text}
    </div>
  </div>
);

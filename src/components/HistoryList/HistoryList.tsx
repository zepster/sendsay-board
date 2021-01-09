import React, { HTMLAttributes } from 'react';
import { Button } from '../Button/Button';
import { Cross } from '../Icons';
import styles from './history-list.module.css';

export interface HistoryTrackProps extends HTMLAttributes<HTMLDivElement> {
  onClear: () => void,
  children: React.ReactNode,
}

export const HistoryList = ({
  onClear,
  children,
  className,
}: HistoryTrackProps) => (
  <div className={`${styles['history-list']} ${className || ''}`}>
    <div className={styles.tracks}>
      {children}
    </div>
    <div className={styles.action}>
      <Button invert onClick={onClear}>
        <Cross />
      </Button>
    </div>
  </div>
);

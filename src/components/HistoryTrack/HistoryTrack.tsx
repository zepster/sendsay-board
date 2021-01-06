import React, { HTMLAttributes } from 'react';
import { Drag } from '../Icons';
import { Button } from '../Button/Button';
import styles from './history-track.module.css';

export interface HistoryTrackProps extends HTMLAttributes<HTMLDivElement> {
  actionName: string,
  success: boolean,
}

export const HistoryTrack = ({
  actionName,
  success,
}: HistoryTrackProps) => (
  <div className={styles.track}>
    <div className={`${styles.status} ${success ? styles['status--ok'] : styles['status--fail']}`} />
    {actionName}
    <Button className={styles.menu} invert onClick={console.log}>
      <Drag />
    </Button>
  </div>
);

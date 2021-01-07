import React, { HTMLAttributes, Ref } from 'react';
import { Kebab } from '../Icons';
import { Button } from '../Button/Button';
import styles from './history-track.module.css';

export interface HistoryTrackProps extends HTMLAttributes<HTMLDivElement> {
  actionName: string,
  success: boolean,
  onMenuClick?: () => void,
  children?: React.ReactNode,
}

export const HistoryTrack = React.forwardRef(({
  actionName,
  success,
  onMenuClick,
  children,
}: HistoryTrackProps, ref: Ref<HTMLDivElement>) => (
  <div ref={ref} className={styles.track}>
    <div className={`${styles.status} ${success ? styles['status--ok'] : styles['status--fail']}`} />
    {actionName}
    <Button className={styles.menu} invert onClick={onMenuClick}>
      <Kebab />
    </Button>
    {children}
  </div>
));

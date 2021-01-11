import React from 'react';
import { Kebab } from '../Icons';
import styles from './resize-panel.module.css';
import { useResize } from './useResize';

export interface ResizePanelProps {
  left: React.ReactNode,
  right: React.ReactNode,
}

export const RerizePanel = ({
  left,
  right,
}: ResizePanelProps) => {
  const { dragElementRef, resizebleElementRef, panelRef } = useResize();

  return (
    <div ref={panelRef} className={styles['resize-panel']}>
      <div ref={resizebleElementRef} className={`${styles.panel} ${styles.left}`}>
        {left}
      </div>
      <div ref={dragElementRef} className={styles.resizer}>
        <Kebab />
      </div>
      <div className={`${styles.panel} ${styles.right}`}>
        {right}
      </div>
    </div>
  );
};

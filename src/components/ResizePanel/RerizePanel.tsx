import React from 'react';
import { Kebab } from '../Icons';
import styles from './resize-panel.module.css';

export interface ResizePanelProps {
  left: React.ReactNode,
  right: React.ReactNode,
}

const useResise = () => {
  const dragElementRef = React.useRef<HTMLDivElement>(null);
  const resizebleElementRef = React.useRef<HTMLDivElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);
  const isDrag = React.useRef(false);
  const lastX = React.useRef(0);

  const onMoveHandler = React.useCallback((event) => {
    const { x } = event;
    const diff = lastX.current - x;
    const element = resizebleElementRef.current;
    lastX.current = x;
    if (!element || !isDrag.current) { return; }
    requestAnimationFrame(() => {
      const { width } = element.getBoundingClientRect();
      const updatedWidth = width + diff * -1;
      // @ts-ignore
      resizebleElementRef.current.style.width = `${updatedWidth}px`;
    });
  }, []);

  React.useEffect(() => {
    const { current } = dragElementRef;
    current?.addEventListener('mousedown', (event) => {
      const { x } = event;
      isDrag.current = true;
      lastX.current = x;
      panelRef.current?.addEventListener('mousemove', onMoveHandler);
    });
    panelRef.current?.addEventListener('mouseup', () => {
      isDrag.current = false;
      panelRef.current?.removeEventListener('mousemove', onMoveHandler);
    });
  }, [isDrag, onMoveHandler]);

  React.useEffect(() => {

  }, []);

  return {
    dragElementRef,
    resizebleElementRef,
    panelRef,
  };
};

export const RerizePanel = ({
  left,
  right,
}: ResizePanelProps) => {
  const { dragElementRef, resizebleElementRef, panelRef } = useResise();

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

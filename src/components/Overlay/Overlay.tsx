import React, { CSSProperties } from 'react';
import styles from './overlay.module.css';

export interface OverlayProps {
  show: boolean,
  children: (styles: CSSProperties, animationClass: string,) => React.ReactNode,
  target: HTMLElement | null,
  offsetX?: number,
  offsetY?: number,
}

const getStyles = (
  target: HTMLElement,
  config: Pick<OverlayProps, 'offsetY' | 'offsetX'>,
): CSSProperties => {
  const rect = target.getBoundingClientRect();

  const y = rect.top + rect.height + (config.offsetY || 0);
  const x = rect.left + (config.offsetX || 0);

  return {
    position: 'fixed',
    inset: '0px auto auto 0px',
    left: x,
    top: y,
  };
};

// calc rect
export const Overlay = ({
  show,
  children,
  target,
  offsetX = 0,
  offsetY = 0,
}: OverlayProps) => {
  if (target && show) {
    const config = { offsetX, offsetY };
    return (
      <>
        {children(
          getStyles(target, config),
          styles.fade,
        )}
      </>
    );
  }
  return null;
};

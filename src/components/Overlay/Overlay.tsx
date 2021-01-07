import React, { CSSProperties } from 'react';

export interface OverlayProps {
  show: boolean,
  children: (styles: CSSProperties) => React.ReactNode,
  target: HTMLElement | null,
}

const getStyles = (
  target: HTMLElement,
): CSSProperties => {
  const rect = target.getBoundingClientRect();

  const y = rect.top + rect.height;
  const x = rect.left;

  return {
    position: 'fixed',
    inset: '0px auto auto 0px',
    transform: `translateX(${x}px) translateY(${y}px)`,
  };
};

// calc rect
export const Overlay = ({
  show,
  children,
  target,
}: OverlayProps) => {
  if (target && show) {
    return <>{children(getStyles(target))}</>;
  }
  return null;
};

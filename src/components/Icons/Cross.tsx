import React from 'react';
import { IconProp } from './types';

export const Cross = ({
  width = 20,
  height = 20,
  className,
}: IconProp) => (
  <svg className={className} width={width} height={height} viewBox="0 0 20 20" fill="none">
    <path d="M1 1L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 1L1 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>

);

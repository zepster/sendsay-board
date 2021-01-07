import React from 'react';
import { IconProp } from './types';

export const Logo = ({
  width = 115,
  height = 30,
  className,
}: IconProp) => (
  <svg className={className} width={width} height={height} viewBox="0 0 115 30" fill="currentColor">
    <circle cx="15" cy="15" r="15" />
    <circle cx="70" cy="15" r="15" />
    <rect x="35" width="15" height="30" />
    <path d="M100 0H115L100 30H85L100 0Z" />
  </svg>

);

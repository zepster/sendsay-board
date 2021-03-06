import React from 'react';
import { IconProp } from './types';

export const Kebab = ({
  width = 4,
  height = 18,
  className,
}: IconProp) => (
  <svg className={className} width={width} height={height} viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2" cy="2" r="2" fill="currentcolor" />
    <circle cx="2" cy="9" r="2" fill="currentcolor" />
    <circle cx="2" cy="16" r="2" fill="currentcolor" />
  </svg>

);

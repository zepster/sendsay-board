import React from 'react';
import { IconProp } from './types';

export default function Format({
  width = 20,
  height = 20,
  className,
}: IconProp) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.8">
        <path d="M21 10H7" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 6H3" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 14H7" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 18H3" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>

  );
}

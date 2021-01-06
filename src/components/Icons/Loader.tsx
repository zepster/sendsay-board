import React from 'react';
import { IconProp } from './types';

export default function Loader({
  width = 20,
  height = 20,
  className,
}: IconProp) {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 24 24" fill="currentcolor" stroke="currentcolor" xmlns="http://www.w3.org/2000/svg">
      <path opacity="0.2" d="M12 2V6" stroke="currentcowhitelor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.7" d="M12 18V22" stroke="currentcowhitelor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.92999 4.92999L7.75999 7.75999" stroke="currentcowhitelor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.6" d="M16.24 16.24L19.07 19.07" stroke="currentcowhitelor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.9" d="M2 12H6" stroke="currentcowhitelor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.4" d="M18 12H22" stroke="currentcowhitelor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.8" d="M4.92999 19.07L7.75999 16.24" stroke="currentcowhitelor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path opacity="0.3" d="M16.24 7.75999L19.07 4.92999" stroke="currentcowhitelor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  );
}

import React, { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

export const Input = ({
  className = '',
  ...props
}: InputProps) => (
  <input
    className={`${className} ${styles.input}`}
    {...props}
  />
);

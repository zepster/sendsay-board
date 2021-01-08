import React, { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean,
}

export const Input = ({
  className = '',
  error,
  ...props
}: InputProps) => (
  <input
    className={`${className} ${styles.input} ${error && styles.invalid}`}
    {...props}
  />
);

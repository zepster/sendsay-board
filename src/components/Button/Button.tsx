import React, { ButtonHTMLAttributes } from 'react';
import { Loader } from '../Icons';
import styles from './button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode,
  loading?: boolean,
  invert?: boolean,
}

export const Button = ({
  children,
  type = 'button',
  loading = false,
  invert = false,
  ...rest
}: ButtonProps) => (
  <button
    type={type === 'button' ? 'button' : 'submit'}
    className={`${styles.btn} ${loading ? styles.loading : ''} ${invert ? styles.invert : ''}`}
    {...rest}
  >
    { loading && <Loader className={styles.loader} /> }
    <span className={styles.content}>
      {children}
    </span>
  </button>
);

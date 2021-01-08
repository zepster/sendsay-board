import React from 'react';
import styles from './form-item.module.css';

export interface FormItemProps {
  children: React.ReactElement,
  id: string,
  label: string
  extra?: string,
  error?: boolean
}

export const FormItem = ({
  id,
  children,
  extra,
  label,
  error,
}: FormItemProps) => (
  <div
    className={`${styles['form-item']} ${error && styles.invalid} `}
  >
    <div className={styles.description}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={id}>{label}</label>
      <span className={styles.extra}>{extra}</span>
    </div>
    {
      children && (
        React.cloneElement(
          children,
          { error },
        ))
    }
  </div>
);

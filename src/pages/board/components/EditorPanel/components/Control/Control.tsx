import React from 'react';
import styles from './control.module.css';

interface ControlProps {
  label: string,
  valid?: boolean,
  readonly?: boolean,
}

export const Control = ({
  label,
  valid = true,
  readonly = false,
}: ControlProps) => (
  <>
    <div className={`${styles.label} ${!valid && styles.error}`}>
      {label}
    </div>
    <div className={`${styles.container} ${!valid && styles.error}`}>
      <div
        contentEditable={!readonly}
        className={`${styles.control} ${styles.error}`}
      />
    </div>
  </>
);

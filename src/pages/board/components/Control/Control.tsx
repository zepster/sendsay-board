import React from 'react';
import styles from './control.module.css';

interface ControlProps {
  label: string,
  valid?: boolean,
  readonly?: boolean,
  value: string,
  onChange?: (value: string) => void,
}

export const Control = ({
  label,
  value,
  onChange = () => {},
  valid = true,
  readonly = false,
}: ControlProps) => (
  <>
    <div className={`${styles.label} ${!valid && styles.error}`}>
      {label}
    </div>
    <div className={`${styles.container} ${!valid && styles.error}`}>
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        readOnly={readonly}
        className={`${styles.control} ${styles.error}`}
      />
    </div>
  </>
);

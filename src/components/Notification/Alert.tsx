import React from 'react';
import { FaceNormal } from '../Icons';
import styles from './alert.module.css';

export interface AlertProps {
  text: string,
  type?: 'danger',
  description?: string,
}

const getIcon = (type: AlertProps['type']) => {
  switch (type) {
    case 'danger': return <FaceNormal />;
    default: return null;
  }
};

const getStyle = (type: AlertProps['type']) => {
  switch (type) {
    case 'danger': return styles.danger;
    default: return '';
  }
};

export const Alert = ({
  text,
  type = 'danger',
  description,
}: AlertProps) => (
  <div className={`${styles.alert} ${getStyle(type)}`}>
    <div className={styles.icon}>
      {getIcon(type)}
    </div>
    <div className={styles.text}>{text}</div>
    <div className={styles.description}>{description}</div>
  </div>
);

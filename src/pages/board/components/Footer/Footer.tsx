import React from 'react';
import { Sign } from 'src/components/Sign/Sign';

import styles from './footer.module.css';

interface FooterProps {
  left: React.ReactElement,
  right: React.ReactElement,
}

export const Footer = ({
  left,
  right,
}: FooterProps) => (
  <div className={styles.footer}>
    {left}
    <Sign>@tot</Sign>
    {right}
  </div>
);

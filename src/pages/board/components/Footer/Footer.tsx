import React from 'react';
import { Button } from 'src/components/Button/Button';
import { Format } from 'src/components/Icons';
import { Sign } from 'src/components/Sign/Sign';

import styles from './footer.module.css';

export const Footer = () => (
  <div className={styles.footer}>
    <Button>Отправить</Button>
    <Sign>@tot</Sign>
    <Button invert>
      <Format />
      Форматировать
    </Button>
  </div>
);

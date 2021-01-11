import React from 'react';
import { RerizePanel } from 'src/components/ResizePanel/RerizePanel';
import { Control } from './components/Control/Control';
import styles from './editor.module.css';

export const EditorPanel = () => (
  <div className={styles.editor}>
    <RerizePanel
      left={<Control label="Запрос:" />}
      right={<Control label="Ответ:" valid={false} readonly />}
    />
  </div>
);

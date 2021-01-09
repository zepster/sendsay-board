import React from 'react';
import { RerizePanel } from 'src/components/ResizePanel/RerizePanel';
import styles from './editor.module.css';

const Item = () => (
  <div style={{
    height: '100%',
    width: '100%',
    // backgroundColor: '#ccc',
    overflow: 'auto',
  }}
  >
    <div
      contentEditable
      style={{
        width: 'inherit',
        height: 'inherit',
        // padding: 10,
        resize: 'none',
        fontSize: 18,
        outline: 'none',
        whiteSpace: 'nowrap',
        border: 'none',
        minWidth: 640,
        minHeight: 520,
      }}
    />
  </div>
);

export const Editor = () => (
  <div className={styles.editor}>
    <RerizePanel left={<Item />} right={<Item />} />
  </div>
);

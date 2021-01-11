import React from 'react';
import { RerizePanel } from 'src/components/ResizePanel/RerizePanel';
import styles from './editor.module.css';

interface EditorPanelProps {
  left: React.ReactNode,
  right: React.ReactNode,
}

export const EditorPanel = ({
  left,
  right,
}: EditorPanelProps) => (
  <div className={styles.editor}>
    <RerizePanel
      left={left}
      right={right}
    />
  </div>
);

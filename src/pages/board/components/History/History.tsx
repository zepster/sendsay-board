import React from 'react';
import { HistoryList } from 'src/components/HistoryList/HistoryList';
import { HistoryTrack } from 'src/components/HistoryTrack/HistoryTrack';
import styles from './history.module.css';

export const History = () => (
  <HistoryList onClear={() => {}} className={styles['track-list']}>
    <HistoryTrack success actionName="tat" />
    <HistoryTrack success actionName="tat" />
    <HistoryTrack success actionName="tat" />

    <HistoryTrack success actionName="tat" />
    <HistoryTrack success actionName="tat" />
    <HistoryTrack success actionName="tat" />

    <HistoryTrack success actionName="tat" />
    <HistoryTrack success actionName="tgawgast" />
    <HistoryTrack success actionName="tagat" />

    <HistoryTrack success actionName="tat" />
    <HistoryTrack success actionName="tagsat" />
    <HistoryTrack success actionName="tagawgt" />

    <HistoryTrack success actionName="tat" />
    <HistoryTrack success actionName="tat" />
    <HistoryTrack success actionName="tagawg awgt" />

    <HistoryTrack success actionName="ta gat" />
    <HistoryTrack success actionName="tat" />
    <HistoryTrack success actionName="tat" />
  </HistoryList>
);

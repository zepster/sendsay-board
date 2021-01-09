import React from 'react';
import { HistoryList } from 'src/components/HistoryList/HistoryList';
import { HistoryTrack } from 'src/components/HistoryTrack/HistoryTrack';
import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import { History } from './components/History/History';

export const ApiConsole = () => (
  <Container>
    <Header />
    <History />
  </Container>
);

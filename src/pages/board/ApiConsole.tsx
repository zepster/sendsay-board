import React from 'react';
import { Container } from './components/Container/Container';
import { EditorPanel } from './components/EditorPanel/EditorPanel';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { History } from './components/History/History';

export const ApiConsole = () => (
  <Container>
    <Header />
    <History />
    <EditorPanel />
    <Footer />
  </Container>
);

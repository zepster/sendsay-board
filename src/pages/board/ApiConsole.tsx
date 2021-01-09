import React from 'react';
import { Container } from './components/Container/Container';
import { Editor } from './components/Editor/Editor';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { History } from './components/History/History';

export const ApiConsole = () => (
  <Container>
    <Header />
    <History />
    <Editor />
    <Footer />
  </Container>
);

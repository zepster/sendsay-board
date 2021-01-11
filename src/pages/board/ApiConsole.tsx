import React from 'react';
import { Button } from 'src/components/Button/Button';
import { Format } from 'src/components/Icons';
import { request } from 'src/services/api/sendsay';
import { Container } from './components/Container/Container';
import { Control } from './components/Control/Control';
import { EditorPanel } from './components/EditorPanel/EditorPanel';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { History } from './components/History/History';

export const ApiConsole = () => {
  const [requestText, setRequestText] = React.useState('');
  const [responseText, setResponseText] = React.useState('');
  const [isValidRequestTest, setIsValidRequestTest] = React.useState(true);
  const formatText = () => {
    try {
      const formatted = JSON.stringify(JSON.parse(requestText), null, 2);
      setRequestText(formatted);
      setIsValidRequestTest(true);
    } catch (e) {
      setIsValidRequestTest(false);
    }
  };

  const sendRequest = () => {
    try {
      const payload = JSON.parse(requestText);
      request(payload).then(
        (response) => setResponseText(JSON.stringify(response, null, 2)),
      ).catch(
        (e) => setResponseText(JSON.stringify(e, null, 2)),
      );
    } catch (e) {
      setIsValidRequestTest(false);
    }
  };

  return (
    <Container>
      <Header />
      <History />
      <EditorPanel
        left={(
          <Control
            label="Запрос:"
            valid={isValidRequestTest}
            value={requestText}
            onChange={setRequestText}
          />
        )}
        right={<Control label="Ответ:" readonly value={responseText} />}
      />
      <Footer
        left={<Button onClick={sendRequest}>Отправить</Button>}
        right={(
          <Button invert onClick={formatText}>
            <Format />
            Форматировать
          </Button>
        )}
      />
    </Container>
  );
};

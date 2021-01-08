import { Button } from 'src/components/Button/Button';
import { Card } from 'src/components/Card/Card';
import { FormItem } from 'src/components/FormItem/FormItem';
import { Input } from 'src/components/Input/Input';
import { Alert } from 'src/components/Notification/Alert';
import React from 'react';
import { Container } from './components/Container/Container';

export const Login = () => (
  <Container>
    <Card header="API-консолька">

      <Alert
        text="Вход не вышел"
        description='{id: "error/auth/failed", explain: "wrong_credentials"}'
      />

      <FormItem
        id="login"
        name="login"
        label="Логин"
      >
        <Input />
      </FormItem>

      <FormItem
        id="sublogin"
        name="sublogin"
        label="Сублогин"
        extra="Опционально"
      >
        <Input />
      </FormItem>

      <FormItem label="Пароль" id="password" name="password">
        <Input type="password" />
      </FormItem>

      <Button>Войти</Button>
    </Card>
  </Container>
);

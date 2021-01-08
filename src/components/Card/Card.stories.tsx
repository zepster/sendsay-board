import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from './Card';
import { Input } from '../Input/Input';
import { FormItem } from '../FormItem/FormItem';
import { Button } from '../Button/Button';
import { Alert } from '../Notification/Alert';

export default {
  title: 'Example/Card',
  component: Card,
} as Meta;

export const InputBase = (props: CardProps) => (
  <div style={{ width: 520, margin: 'auto' }}>
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
  </div>
);

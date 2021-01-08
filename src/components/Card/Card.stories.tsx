import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { Card, CardProps } from './Card';
import { Input } from '../Input/Input';
import { FormItem } from '../FormItem/FormItem';
import { Button } from '../Button/Button';

export default {
  title: 'Example/Card',
  component: Card,
} as Meta;

export const InputBase = (props: CardProps) => (
  <div style={{ width: 520, margin: 'auto' }}>
    <Card header="API-консолька">
      <FormItem
        id="id1"
        label="Логин"
      >
        <Input id="id1" />
      </FormItem>

      <FormItem
        id="id2"
        label="Сублогин"
        extra="Опционально"
      >
        <Input id="id2" />
      </FormItem>

      <FormItem id="id2" label="Пароль">
        <Input id="id2" type="password" />
      </FormItem>

      <Button>Войти</Button>
    </Card>
  </div>
);

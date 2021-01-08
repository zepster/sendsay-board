import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { FormItem, FormItemProps } from './FormItem';
import { Input } from '../Input/Input';

export default {
  title: 'Example/FormItem',
  component: FormItem,
  argTypes: {
    login: { control: 'text', defaultValue: 'some@email.com' },
    sublogin: { control: 'text', defaultValue: 'sublogin' },
  },
} as Meta;

export const InputBase = (props: FormItemProps) => (
  <>
    <FormItem
      error
      id="id1"
      name="name"
      label="Логин"
      extra="опционально"
    >
      <Input id="id1" />
    </FormItem>

    <FormItem name="password" id="id2" label="Пароль">
      <Input id="id2" type="password" />
    </FormItem>
  </>
);

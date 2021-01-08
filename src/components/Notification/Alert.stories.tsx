import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { Alert, AlertProps } from './Alert';

export default {
  title: 'Example/Notification/Alert',
  component: Alert,
  argTypes: {
    text: { control: 'text', defaultValue: 'sublogin' },
  },
} as Meta;

export const InputBase = (props: AlertProps) => (
  <Alert
    text="Вход не вышел"
    description='{id: "error/auth/failed", explain: "wrong_credentials"}'
  />
);

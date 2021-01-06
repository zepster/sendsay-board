import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {},
} as Meta;

export const InputBase = () => <Input />;

import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { Sign } from './Sign';

export default {
  title: 'Example/Sign',
  component: Sign,
  argTypes: {},
} as Meta;

export const InputBase = () => <Sign>@link-to-your-github</Sign>;

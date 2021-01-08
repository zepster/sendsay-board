import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { UserInfo, UserInfoProps } from './UserInfo';

export default {
  title: 'Example/UserInfo',
  component: UserInfo,
  argTypes: {
    login: { control: 'text', defaultValue: 'some@email.com' },
    sublogin: { control: 'text', defaultValue: 'sublogin' },
  },
} as Meta;

export const InputBase = (props: UserInfoProps) => (
  <UserInfo {...props} />
);

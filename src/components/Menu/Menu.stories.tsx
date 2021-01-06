import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { Menu, MenuProp } from './Menu';

export default {
  title: 'Example/Menu',
  component: Menu,
  argTypes: {},
} as Meta;

export const InputBase = (props: MenuProp) => (
  <Menu {...props}>
    <Menu.Item>Menu1</Menu.Item>
    <Menu.Item>Menu3</Menu.Item>
    <Menu.Delimiter />
    <Menu.Item type="danger">menu2</Menu.Item>
  </Menu>
);

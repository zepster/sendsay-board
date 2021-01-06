import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';
import Format from '../Icons/Format';
import Expand from '../Icons/Expand';

import * as Icons from '../Icons';

const getIcon = (name: keyof typeof Icons) => Icons[name] || Icons.Collapse;

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    invert: { control: 'boolean' },
    icon: {
      control: {
        type: 'select',
        options: Object.keys(Icons),
      },
    },
  },
} as Meta;

export const Primary = () => <Button>Primary</Button>;
export const Disabled = (args: ButtonProps) => <Button disabled {...args}>Disabled</Button>;
export const Loading = (args: ButtonProps) => (
  <Button loading {...args}>
    <Format />
    {' '}
    Loading
  </Button>
);
export const Invert = (args: ButtonProps) => <Button invert {...args}>Invert</Button>;
export const WithIcon = ({ icon, ...rest }: ButtonProps & { icon: string }) => {
  const Icon = getIcon(icon as any);
  return (
    <Button
      {...rest}
    >
      <Icon />
      Invert
    </Button>
  );
};

export const ButtonIcon = (args: ButtonProps) => (
  <Button
    {...args}
  >
    <Expand width={24} height={24} />
  </Button>
);

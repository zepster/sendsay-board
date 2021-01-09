import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { RerizePanel } from './RerizePanel';

export default {
  title: 'Example/RerizePanel',
  component: RerizePanel,
  argTypes: {},
} as Meta;

const Item = () => (
  <div style={{
    height: '100%',
    width: '100%',
    // backgroundColor: '#ccc',
    overflow: 'auto',
  }}
  >
    <div
      contentEditable
      style={{
        width: 'inherit',
        height: 'inherit',
        // padding: 10,
        resize: 'none',
        fontSize: 18,
        outline: 'none',
        whiteSpace: 'nowrap',
        border: 'none',
        minWidth: 640,
        minHeight: 520,
      }}
    />
  </div>
);

export const InputBase = () => <RerizePanel left={<Item />} right={<Item />} />;

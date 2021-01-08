import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { Inner, InnerNotifyProps } from './Inner';
import { Button } from '../Button/Button';

export default {
  title: 'Example/Notification/Inner',
  component: Inner,
  argTypes: {
    text: { control: 'text', defaultValue: 'sublogin' },
  },
} as Meta;

export const InputBase = (props: InnerNotifyProps) => {
  const [show, setShow] = React.useState(false);
  const { text } = props;

  return (
    <div style={{
      width: 200,
      height: 150,
      border: '1px solid #ccc',
      position: 'relative',
    }}
    >
      <Button onClick={() => setShow(true)}>
        click ME!
      </Button>
      {show && <Inner text={text} onEnd={() => setShow(false)} />}
    </div>
  );
};

import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { Overlay, OverlayProps } from './Overlay';
import { Button } from '../Button/Button';

export default {
  title: 'Example/Overlay',
  component: Overlay,
  argTypes: {},
} as Meta;

export const OverlayBase = (props: OverlayProps) => {
  const [show, setShow] = React.useState(false);
  const targetRef = React.useRef<HTMLButtonElement>(null);

  return (
    <>
      <button ref={targetRef} type="button" onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </button>
      <Overlay show={show} target={targetRef.current}>
        { (styles) => (
          <div style={styles}>
            content
          </div>
        )}
      </Overlay>
    </>
  );
};

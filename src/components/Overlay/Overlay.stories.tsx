import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { Overlay, OverlayProps } from './Overlay';
import { HistoryTrack } from '../HistoryTrack/HistoryTrack';
import { Menu } from '../Menu/Menu';

export default {
  title: 'Example/Overlay',
  component: Overlay,
  argTypes: {},
} as Meta;

export const OverlayBase = (props: OverlayProps) => {
  const [show, setShow] = React.useState(false);
  const targetRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <HistoryTrack
        ref={targetRef}
        success
        actionName="pong"
        onMenuClick={() => setShow(!show)}
      />
      <Overlay show={show} target={targetRef.current}>
        { (styles, animationClass) => (
          <div style={styles} className={animationClass}>
            <Menu {...props}>
              <Menu.Item>Выполнить</Menu.Item>
              <Menu.Item>Скопировать</Menu.Item>
              <Menu.Delimiter />
              <Menu.Item type="danger">Удалить</Menu.Item>
            </Menu>
          </div>
        )}
      </Overlay>
    </>
  );
};

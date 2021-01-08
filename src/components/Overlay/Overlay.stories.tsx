import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { Overlay, OverlayProps } from './Overlay';
import { HistoryTrack } from '../HistoryTrack/HistoryTrack';
import { Menu } from '../Menu/Menu';
import { Inner } from '../Notification/Inner';

export default {
  title: 'Example/Overlay',
  component: Overlay,
  argTypes: {},
} as Meta;

export const OverlayBase = (props: OverlayProps) => {
  const [show, setShow] = React.useState(false);
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [showNotification, setShowNotification] = React.useState(false);

  const onExecute = () => console.log('onExecute');
  const onCopy = () => {
    setShowNotification(true);
    setShow(false);
  };
  const onRemove = () => console.log('onRemove');

  const onTransitionEnd = () => {
    setShowNotification(false);
  };

  return (
    <>
      <HistoryTrack
        ref={targetRef}
        success
        actionName="pong"
        onMenuClick={() => setShow(!show)}
      >
        {showNotification && <Inner onEnd={onTransitionEnd} text="Скопировано " />}
      </HistoryTrack>
      <Overlay show={show} target={targetRef.current}>
        { (styles, animationClass) => (
          <div style={styles} className={animationClass}>
            <Menu {...props}>
              <Menu.Item onClick={onExecute}>Выполнить</Menu.Item>
              <Menu.Item onClick={onCopy}>Скопировать</Menu.Item>
              <Menu.Delimiter />
              <Menu.Item type="danger" onClick={onRemove}>Удалить</Menu.Item>
            </Menu>
          </div>
        )}
      </Overlay>
    </>
  );
};

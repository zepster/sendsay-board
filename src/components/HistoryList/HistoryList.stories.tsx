import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { HistoryList } from './HistoryList';
import { HistoryTrack } from '../HistoryTrack/HistoryTrack';

export default {
  title: 'Example/HistoryList',
  component: HistoryList,
  argTypes: {
    onClear: { action: 'click clear' },
  },
} as Meta;

export const List = (props: any) => (
  <HistoryList {...props}>
    <HistoryTrack success actionName="name1" />
    <HistoryTrack success={false} actionName="name2" />
    <HistoryTrack success actionName="named asd .1" />
    <HistoryTrack success={false} actionName="namedaw 1" />

    <HistoryTrack success={false} actionName="name2" />
    <HistoryTrack success actionName="named asd .1" />
    <HistoryTrack success={false} actionName="namedaw 1" />

    <HistoryTrack success={false} actionName="name2" />
    <HistoryTrack success actionName="named asd .1" />
    <HistoryTrack success={false} actionName="namedaw 1" />
  </HistoryList>
);

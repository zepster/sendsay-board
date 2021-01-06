import React from 'react';
/* eslint import/no-extraneous-dependencies: off */
import { Meta } from '@storybook/react/types-6-0';

import { HistoryTrack, HistoryTrackProps } from './HistoryTrack';

export default {
  title: 'Example/HistoryTrack',
  component: HistoryTrack,
  argTypes: {
    success: { control: 'boolean' },
    actionName: { control: 'text', defaultValue: 'tack.get' },
  },
} as Meta;

export const InputBase = (props: HistoryTrackProps) => <HistoryTrack {...props} />;

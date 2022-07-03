/* eslint-disable */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

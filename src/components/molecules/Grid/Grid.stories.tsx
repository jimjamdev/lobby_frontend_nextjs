// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Box } from '~components/atoms/Box/Box';

import { Grid } from './Grid';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Design System/Molecules/Grid',
  component: Grid,
  storyName: 'Grid',
  argTypes: {
    gridGap: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
    gridRowGap: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
    gridColumnGap: {
      options: [1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
    gridArea: {
      control: { type: 'text' },
    },
    gridColumn: {
      control: { type: 'text' },
    },
    gridAutoFlow: {
      control: { type: 'text' },
    },
    gridAutoRows: {
      control: { type: 'text' },
    },
    gridAutoColumns: {
      control: { type: 'text' },
    },
    gridTemplateRows: {
      control: { type: 'text' },
    },
    gridTemplateColumns: {
      control: { type: 'text' },
    },
    gridTemplateAreas: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Grid>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
    <Box p={2} bg="tomato">Item</Box>
  </Grid>
);

export const Index = Template.bind({});
Index.args = { gridGap: 2, gridColumn: 'span 2', gridAutoRows: 'auto' };

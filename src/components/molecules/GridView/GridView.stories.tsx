// Button.stories.ts|tsx

import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { GridView } from 'components/molecules/GridView/GridView';
import { Box } from '~components/atoms/Box/Box';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Design System/Molecules/GridView',
  component: GridView,
  storyName: 'GridView',
  argTypes: {
    columns: {
      options: [[1, 2, 3], [2, 4, 6], 1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
    gridGap: {
      options: [[1, 2, 3], [2, 4, 6], 1, 2, 3, 4, 5, 6],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof GridView>;

// 👇 We create a “template” of how args map to rendering
// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof GridView> = (args) => (
  <GridView {...args}>
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
  </GridView>
);

export const Index = Template.bind({});
Index.args = { columns: [1, 4, 6, 8], gridGap: [2, 3, 4] };

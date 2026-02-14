import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Block } from './block';

export default {
  title: 'Components/Block',
  component: Block,
  args: {
    className: 'string'
  },
} as ComponentMeta<typeof Block>;

const Template: ComponentStory<typeof Block> = (args) => (
  <Block {...args}>I'm a block</Block>
);

export const Story = Template.bind({});
Story.args = {};

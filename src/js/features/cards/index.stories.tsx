import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Cards } from './index';

export default {
  title: 'Components/Cards',
  component: Cards,
  args: {
    type: "female"
  },
} as ComponentMeta<typeof Cards>;

const Template: ComponentStory<typeof Cards> = (args) => (
  <Cards {...args} />
);

export const Story = Template.bind({});
Story.args = {};

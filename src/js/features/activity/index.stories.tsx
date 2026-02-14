import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Activity } from './index';

export default {
  title: 'Components/Activity',
  component: Activity,
  args: {

  },
} as ComponentMeta<typeof Activity>;

const Template: ComponentStory<typeof Activity> = (args) => (
  <Activity {...args} />
);

export const Story = Template.bind({});
Story.args = {};

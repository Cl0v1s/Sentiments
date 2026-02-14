import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Gender } from './index';

export default {
  title: 'Components/Gender',
  component: Gender,
  args: {

  },
} as ComponentMeta<typeof Gender>;

const Template: ComponentStory<typeof Gender> = (args) => (
  <Gender {...args} />
);

export const Story = Template.bind({});
Story.args = {};

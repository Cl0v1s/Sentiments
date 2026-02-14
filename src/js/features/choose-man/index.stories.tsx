import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ChooseMan } from './index';

export default {
  title: 'Components/ChooseMan',
  component: ChooseMan,
  args: {

  },
} as ComponentMeta<typeof ChooseMan>;

const Template: ComponentStory<typeof ChooseMan> = (args) => (
  <ChooseMan {...args} />
);

export const Story = Template.bind({});
Story.args = {};

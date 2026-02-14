import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ChooseWoman } from './index';

export default {
  title: 'Components/ChooseWoman',
  component: ChooseWoman,
  args: {

  },
} as ComponentMeta<typeof ChooseWoman>;

const Template: ComponentStory<typeof ChooseWoman> = (args) => (
  <ChooseWoman {...args} />
);

export const Story = Template.bind({});
Story.args = {};

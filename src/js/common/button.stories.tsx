import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} className='bg-primary'>Click me</Button>
);

export const Story = Template.bind({});
Story.args = {};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Hamburger } from './Hamburger';

export default {
  title: 'UI/Hamburger',
  component: Hamburger,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Hamburger>;

const Template: ComponentStory<typeof Hamburger> = (args) => <Hamburger {...args} />;

export const Default = Template.bind({});
Default.args = {
    open: false,
    onClick: () => {},
};
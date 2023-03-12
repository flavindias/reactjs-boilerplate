import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavLink } from './NavLink';

export default {
  title: 'UI/NavLink',
  component: NavLink,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof NavLink>;

const Template: ComponentStory<typeof NavLink> = (args) => <NavLink {...args} />;

export const Activated = Template.bind({});
Activated.args = {
    active: true,
    title: "Home",
    icon: "home"
};

export const Default = Template.bind({});
Default.args = {};
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Nav } from './Nav';

export default {
  title: 'UI/Nav',
  component: Nav,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
    items: [
        {
            active: true,
            title: "Dashboard",
            icon: "home",
            onClick: () => {},
            to: "dashboard"
        },
        {
            active: false,
            title: "Home",
            icon: "home",
            onClick: () => {},
            to: "home"
        },
    ]
};

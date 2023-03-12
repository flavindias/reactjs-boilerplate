import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar } from './Sidebar';

export default {
  title: 'UI/Sidebar',
  component: Sidebar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Sidebar>;

const menu = {
    items: [
        {
            title: "Home",
            icon: "home",
            onClick: () => {},
            active: true
        },
        {
            title: "Profile",
            icon: "user",
            onClick: () => {},
            active: false
        },
        {
            title: "Settings",
            icon: "cog",
            onClick: () => {},
            active: false
        },
        {
            title: "Logout",
            icon: "sign-out-alt",
            onClick: () => {},
            active: false
        }
    ]
};

const logo = {
    src: "https://via.placeholder.com/150",
    alt: "Logo"
}

const Template: ComponentStory<typeof Sidebar> = () => <Sidebar menu={menu} logo={logo}/>;

export const SidebarStory = Template.bind({});
SidebarStory.args = {};

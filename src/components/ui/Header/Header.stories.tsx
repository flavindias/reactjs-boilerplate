import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'UI/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    user: {
        id: "1",
        fullName: "Tester",
        username: "tester",
        email: "tester@storybook.com",
        createdAt: "2023-03-13T13:07:50.972Z",
        updatedAt: "2023-03-13T13:07:50.972Z",
    }
};

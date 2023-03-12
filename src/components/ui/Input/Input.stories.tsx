import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

export default {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Label",
    type: "text",
};

export const Email = Template.bind({});
Email.args = {
    label: "E-mail",
    type: "email",
};

export const Password = Template.bind({});
Password.args = {
    label: "Password",
    type: "password"
};
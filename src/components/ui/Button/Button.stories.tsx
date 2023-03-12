import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "Primary",
    mode: "primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: "Secondary",
    mode: "secondary"
};

export const Warning = Template.bind({});
Warning.args = {
    label: "Warning",
    mode: "warning"
};

export const Small = Template.bind({});
Small.args = {
    label: "Primary",
    mode: "primary",
    size: "small"
};

export const Medium = Template.bind({});
Medium.args = {
    label: "Primary",
    mode: "warning",
    size: "medium"
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "Primary",
    mode: "warning",
    size: "medium",
    disabled: true
};

export const Outline = Template.bind({});
Outline.args = {
    label: "Outline",
    mode: "warning",
    outline: true
};
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './Loader';

export default {
  title: 'UI/Loader',
  component: Loader,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
    isLoading: true
};

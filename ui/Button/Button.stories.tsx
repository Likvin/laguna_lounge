import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Example/ButtonNew',
  component: Button,
} as ComponentMeta <typeof Button>;

const buttonText = "Button"

const Template: ComponentStory <typeof Button> = (args) => <Button {...args}>{buttonText}</Button>;

export const Default = Template.bind({});
Default.args = {

};
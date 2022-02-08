import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button';
import { FiArrowUp } from "react-icons/fi";

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta <typeof Button>;

const buttonText = "Button"
const Template: ComponentStory <typeof Button> = (args) => <Button {...args}>{buttonText}</Button>;
export const Default = Template.bind({});
Default.args = {

};

const ButtonWithIcon: ComponentStory <typeof Button> = (args) => <Button {...args}><FiArrowUp size='30px'/></Button>;
export const IconButton = ButtonWithIcon.bind({});
IconButton.args = {
  
};
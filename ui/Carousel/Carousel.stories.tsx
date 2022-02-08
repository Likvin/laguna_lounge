import React from 'react';
import { Carousel } from './Carousel';
import { ComponentStory, ComponentMeta} from '@storybook/react';
import styles from './styles.module.scss';

export default {
	title: 'Components/Carousel',
	component: Carousel
} as ComponentMeta <typeof Carousel>;

const Template: ComponentStory <typeof Carousel> = (args) => <Carousel {...args}></Carousel>;

export const Basic = Template.bind({});
Basic.args = {
	images:['carousel/6.jpg','carousel/7.jpg','carousel/8.jpg']
}
Basic.parameters = {
	controls: {
		disabled: true
	},
	actions: {
		disabled: true
	}
}


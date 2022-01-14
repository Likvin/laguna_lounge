import React from 'react';
import { ComponentStory, ComponentMeta} from '@storybook/react';

import { Card } from './Card';

export default {
	title: 'Example/Card',
	component: Card
} as ComponentMeta <typeof Card>;

const Template: ComponentStory <typeof Card> = (args) => <Card {...args}></Card>;

export const Basic = Template.bind({});
Basic.parameters = {
	controls: {
		disabled: true
	},
	actions: {
		disabled: true
	}
}
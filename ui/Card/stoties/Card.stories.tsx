import React from 'react';
import { ComponentStory, ComponentMeta} from '@storybook/react';
import styles from './styles.module.scss';
import { Card } from '../Card';

export default {
	title: 'Components/Card',
	component: Card
} as ComponentMeta <typeof Card>;

const Template: ComponentStory <typeof Card> = (args) => 
	<Card {...args}>
		<p className={styles.container}>
			Феодосия - один из старейших городов Европы, с
			историей которого может соперничать лишь Рим и Афины. 
		</p>
	</Card>;

export const Basic = Template.bind({});
Basic.args = {
	header: '',
	actions: [{onClick: () =>[],title:'Инфо'},
			  {onClick: () =>[],title:'ОК'}],
	image: 'feo.jpg',
}
Basic.parameters = {
	controls: {
		disabled: true
	},
	actions: {
		disabled: true
	}
}
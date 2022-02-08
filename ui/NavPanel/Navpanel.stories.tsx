import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { GiBlackSea } from 'react-icons/gi';

import { Navpanel } from './Navpanel';

export default {
  title: 'Components/NavPanel',
  args: {name:'Laguna Lounge',
		 icon: <GiBlackSea/>
		},
  component: Navpanel
} as ComponentMeta <typeof Navpanel>;

const Template: ComponentStory <typeof Navpanel> = (args) => <Navpanel {...args}></Navpanel>;

export const Basic = Template.bind({});
Basic.parameters = {
	controls: {
		disabled: true
	},
	actions: {
		disabled: true
	}
};
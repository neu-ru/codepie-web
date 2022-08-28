import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Chip from "../pages/feed_list/_chip";

export default {
    title: 'codepie/Chip',
    component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Unselected = Template.bind({});
Unselected.args = {
    label: 'Front-end',
    selected: false,
    onClick: () => {
    }
};

export const Selected = Template.bind({});
Selected.args = {
    label: 'Front-end',
    selected: true,
    onClick: () => {
    }
};

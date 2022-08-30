import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Chip from "../pages/feed_list/_chip";
import WriteFeed from "../pages/feed_list/_write_feed";

export default {
    title: 'codepie/WriteFeed',
    component: WriteFeed,
} as ComponentMeta<typeof WriteFeed>;

const Template: ComponentStory<typeof WriteFeed> = (args) => <WriteFeed {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    onClick: () => {
    }
};
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import FeedThumbnail from "../../../pages/feed_list/_feed_thumbnail";

export default {
    title: 'codepie/FeedThumbnail',
    component: FeedThumbnail,
} as ComponentMeta<typeof FeedThumbnail>;

const Template: ComponentStory<typeof FeedThumbnail> = () => <FeedThumbnail/>;

export const Basic = Template.bind({});
Basic.args = {};
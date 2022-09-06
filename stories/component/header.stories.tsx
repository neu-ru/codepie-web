import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import Header from "../../component/header/header";

export default {
    title: 'codepie/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    isLoggedIn: true
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
    isLoggedIn: false
};

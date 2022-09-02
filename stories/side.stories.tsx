import {ComponentMeta, ComponentStory} from "@storybook/react";
import SideCard from "../pages/feed_list/_side_card";

export default {
    title: 'codepie/Side',
    component: SideCard,
} as ComponentMeta<typeof SideCard>;

const Template: ComponentStory<typeof SideCard> = () => <SideCard/>;

export const Basic = Template.bind({});
Basic.args = {};

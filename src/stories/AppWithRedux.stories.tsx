import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import AppWithRedux from "../AppWithRedux";
import {Provider} from "react-redux";
import {store} from "../state/store";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator.";


export default {
    title: 'TODO/AppWithRedux',
    component:  AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof  AppWithRedux>;

const Template: ComponentStory<typeof  AppWithRedux> = (args) =>  < AppWithRedux />;

export const  AppWithReduxStory = Template.bind({});

AppWithReduxStory.args = {
    onChange: action('EditableSpan change')
};




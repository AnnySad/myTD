import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {AddItemForm} from "../components/AddItemForm";
import {action} from "@storybook/addon-actions";

export default {
    title: 'TODO/AddItemForm',
    component: AddItemForm,
    argTypes: {
        addItem: {description: 'button clicked inside form' },
    },
} as ComponentMeta<typeof AddItemForm>;

const Template: ComponentStory<typeof AddItemForm> = (args) => <AddItemForm {...args} />;

export const AddItemFormStories = Template.bind({});

AddItemFormStories.args = {
    addItem: action('button clicked inside form')
};


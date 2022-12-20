import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "../components/Task";
import {EditableSpan} from "../components/EditableSpan";


export default {
    title: 'TODO/EditableSpan',
    component: EditableSpan,
    argTypes: {
        title: {
            description: 'value to editable span',
            defaultValue: 'bla'
        },
        onChange: {description: 'callback'}
    },
} as ComponentMeta<typeof EditableSpan>;

const Template: ComponentStory<typeof EditableSpan> = (args) => <EditableSpan {...args} />;

export const EditableSpanStories = Template.bind({});

EditableSpanStories.args = {
    onChange: action('EditableSpan change')
};




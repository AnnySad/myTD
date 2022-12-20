import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "../components/Task";


export default {
    title: 'TODO/Task',
    component: Task,
    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
        todoListID: 'dfcd54',
    },
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStories = Template.bind({});

TaskIsDoneStories.args = {
    task: {id: 'd;wes', isDone: true, title: 'Br'},
};
export const TaskIsNotDoneStories = Template.bind({});

TaskIsNotDoneStories.args = {
    task: {id: 'desedacdf', isDone: false, title: 'MAY'},
};



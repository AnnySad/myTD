import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {AddItemForm} from "../components/AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "../components/Task";
import {TaskType} from "../Todolist";

export default {
    title: 'TODO/Task',
    component: Task,
    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskTitle'),
        removeTask: action('removeTask'),
        /* todoListId: 'dfcd',*/
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



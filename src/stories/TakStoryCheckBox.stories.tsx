import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Task} from "../components/Task";


export default {
    title: 'TODO/Task',
    component: Task,

} as ComponentMeta<typeof Task>;




const Template: ComponentStory<typeof Task> = () => {

    const [task, setTask] = useState({id: 'd;wes', isDone: true, title: 'Br'})
    const changeTaskStatus = () => setTask({id: 'd;wes', isDone: !task.isDone, title: 'Br'})

    return <Task
        task={task}
        changeTaskStatus={changeTaskStatus}
        changeTaskTitle={action('changeTaskTitle')}
        removeTask={action('changeTaskTitle')}
        todoListID='sd1'/>
}

export const TaskStories = Template.bind({});
TaskStories.args={}



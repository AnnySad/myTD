import React, {ChangeEvent, useState, KeyboardEvent, useCallback, memo} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";
import {Button, Checkbox} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {Task} from "./components/Task";
import {TaskRedux} from "./components/TaskRedux";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    editTitleTodolist: (todolistId: string, title: string) => void
    changeTaskTitle: (todolistId: string, taskID: string, nextTitle: string) => void
}

export const Todolist = memo((props: PropsType) => {

    const addTaskHandler = useCallback((title: string) => {
        props.addTask(title, props.id)
    }, [props.addTask, props.id])

    const editTitleTodolistHandler = useCallback((title: string) => {
        props.editTitleTodolist(props.id, title);
    }, [props.editTitleTodolist, props.id])

    const changeFilterHandler = (filterValue: FilterValuesType) => {
        props.changeFilter(filterValue, props.id)
    }
    const removeTodolist = useCallback(() => {
        props.removeTodolist(props.id);
    }, [props.removeTodolist, props.id])

    const onAllClickHandler = useCallback(() => props.changeFilter("all", props.id), [props.id]);
    const onActiveClickHandler = useCallback(() => props.changeFilter("active", props.id), [props.id]);
    const onCompletedClickHandler = useCallback(() => props.changeFilter("completed", props.id), [props.id]);



    let allTodolistTasks = props.tasks;

    if (props.filter === "active") {
        allTodolistTasks = allTodolistTasks.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        allTodolistTasks = allTodolistTasks.filter(t => t.isDone === true);
    }


    return <div>
        <h3>
            <EditableSpan onChange={editTitleTodolistHandler} title={props.title}/>
            <IconButton onClick={removeTodolist}>
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm addItem={addTaskHandler}/>

        <div>
            {
                allTodolistTasks.map(t => {

                    return <TaskRedux
                        key={t.id}
                        taskId={t.id}
                        todolistId={props.id}/>
                })
            }
        </div>

            <Button variant={props.filter === 'all' ? 'outlined' : 'text'}
                    onClick={onAllClickHandler}
                    color={'default'}
            >All
            </Button>
            <Button variant={props.filter === 'active' ? 'outlined' : 'text'}
                    onClick={onActiveClickHandler}
                    color={'primary'}>Active
            </Button>
            <Button variant={props.filter === 'completed' ? 'outlined' : 'text'}
                    onClick={onCompletedClickHandler}
                    color={'secondary'}>Completed
            </Button>
        </div>

})




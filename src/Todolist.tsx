import React, {ChangeEvent, useState, KeyboardEvent, useCallback, memo} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";
import {NewComponentMap} from "./components/NewComponentMap";
import {Button, Checkbox} from "@material-ui/core";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

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
        {/*<NewComponentMap
            tasks={props.tasks}
            removeTask={props.removeTask}
            changeTaskStatus={props.changeTaskStatus}
            editTitleTask={props.editTitleTask}
            todolistID={props.id}
            filter={props.filter}/>
*/}

        <div>
            {
                allTodolistTasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.id);
                    }
                    const onTitleChangeHandler = (nextTitle: string) => {
                        props.changeTaskTitle(t.id, nextTitle, props.id);
                    }


                    return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox
                            checked={t.isDone}
                            color="primary"
                            onChange={onChangeHandler}
                        />

                        <EditableSpan title={t.title} onChange={onTitleChangeHandler}/>
                        <IconButton onClick={onClickHandler}>
                            <Delete />
                        </IconButton>
                    </div>
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




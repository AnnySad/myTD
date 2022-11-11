import React, {ChangeEvent, useCallback} from 'react';
import {EditableSpan} from "./EditableSpan";
import {TaskType} from "../Todolist";
import {CheckBox, Delete} from "@material-ui/icons";
import {Checkbox, IconButton} from "@material-ui/core";
import {FilterValuesType} from "../App";

type NewComponentMapPropsType={
    tasks:Array<TaskType>
    todolistID:string
    filter: FilterValuesType
    removeTask: (taskId: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    changeTaskTitle: (todolistId: string, taskID: string, title: string) => void

}


export const NewComponentMap = React.memo((props:NewComponentMapPropsType) => {



    const editTitleTaskHandler = useCallback((taskID: string, title: string) => {
        props.changeTaskTitle(props.todolistID, taskID, title)
    },[props.changeTaskTitle,props.todolistID])

    let allTodolistTasks = props.tasks;
    let tasksForTodolist = allTodolistTasks;

    if (props.filter === "active") {
        allTodolistTasks = allTodolistTasks.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        allTodolistTasks = allTodolistTasks.filter(t => t.isDone === true);
    }
    return (
        <div>
            {
                allTodolistTasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.todolistID)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.id, newIsDoneValue, props.todolistID);
                    }
                 /* const onTitleChangeHandler = (newValue:string) => {
                       props.changeTaskTitle(props.tasks.id,newValue,t.id)*/



                    return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox
                            checked={t.isDone}
                            color="primary"
                            onChange={onChangeHandler}
                        />
                        {/*<span>{t.title}</span>*/}
                        <EditableSpan title={t.title} onChange={(nextTitle: string) => editTitleTaskHandler(t.id, nextTitle)}/>
                       {/* <button onClick={onClickHandler}>x</button>*/}
                        <IconButton onClick={onClickHandler} >
                            <Delete />
                        </IconButton>
                    </div>
                })
            }
        </div>

    );
});

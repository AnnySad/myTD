import React, {ChangeEvent} from 'react';
import {EditableSpan} from "./EditableSpan";
import {TaskType} from "../Todolist";
import {Delete} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

type NewComponentMapPropsType={
    tasks:Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    editTitleTask: (todolistId: string, taskID: string, title: string) => void
    todolistID:string
}


export const NewComponentMap = (props:NewComponentMapPropsType) => {

    const{tasks,removeTask,changeTaskStatus,editTitleTask,todolistID}=props

    const editTitleTaskHandler = (taskID: string, title: string) => {
        editTitleTask(todolistID, taskID, title)
    }
    return (
        <ul>
            {
                tasks.map(t => {
                    const onClickHandler = () => removeTask(t.id, todolistID)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        changeTaskStatus(t.id, newIsDoneValue, todolistID);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        {/*<span>{t.title}</span>*/}
                        <EditableSpan title={t.title} changeTitle={(nextTitle) => editTitleTaskHandler(t.id, nextTitle)}/>
                       {/* <button onClick={onClickHandler}>x</button>*/}
                        <IconButton onClick={onClickHandler} >
                            <Delete />
                        </IconButton>
                    </li>
                })
            }
        </ul>

    );
};

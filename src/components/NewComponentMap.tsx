import React, {ChangeEvent} from 'react';
import {EditableSpan} from "./EditableSpan";
import {TaskType} from "../Todolist";
import {CheckBox, Delete} from "@material-ui/icons";
import {Checkbox, IconButton} from "@material-ui/core";

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
        <div>
            {
                tasks.map(t => {
                    const onClickHandler = () => removeTask(t.id, todolistID)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        changeTaskStatus(t.id, newIsDoneValue, todolistID);
                    }

                    return <div key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox
                            checked={t.isDone}
                            color="primary"
                            onChange={onChangeHandler}
                        />
                        {/*<span>{t.title}</span>*/}
                        <EditableSpan title={t.title} changeTitle={(nextTitle) => editTitleTaskHandler(t.id, nextTitle)}/>
                       {/* <button onClick={onClickHandler}>x</button>*/}
                        <IconButton onClick={onClickHandler} >
                            <Delete />
                        </IconButton>
                    </div>
                })
            }
        </div>

    );
};

import React, {ChangeEvent, useCallback} from 'react';
import {Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";
import {TaskType} from "../Todolist";
import {EditableSpan} from "./EditableSpan";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "../reducer/tasksReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

export type TaskReduxPropsType = {
    taskId: string
    todolistId: string

}

export const TaskRedux = React.memo(({taskId,todolistId}: TaskReduxPropsType) => {

    const task = useSelector<AppRootStateType,TaskType>(state=>state.tasks[todolistId].filter(task=>task.id ===taskId)[0])
    const dispatch=useDispatch()

    const onClickHandler =useCallback( () => dispatch(removeTaskAC(taskId,todolistId)),[dispatch,taskId,todolistId])

    const onTitleChangeHandler = useCallback((newValue: string) => {
        dispatch(changeTaskTitleAC(taskId, newValue, todolistId));
    }, [dispatch,taskId,todolistId])

    const onChangeHandler =useCallback( (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        dispatch(changeTaskStatusAC(taskId, newIsDoneValue,todolistId));
    },[dispatch,taskId,todolistId])

    return (
        <div className={task.isDone ? "is-done" : ""}>
            <Checkbox
                checked={task.isDone}
                color="primary"
                onChange={onChangeHandler}
            />

            <EditableSpan title={task.title} onChange={onTitleChangeHandler}/>
            <IconButton onClick={onClickHandler}>
                <Delete/>
            </IconButton>
        </div>
    )
})
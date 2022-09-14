import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";
import {NewComponentMap} from "./components/NewComponentMap";
import {Button} from "./components/Button";

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
    editTitleTask: (todolistId: string, taskID: string, title: string) => void
}

export function Todolist(props: PropsType) {

    // let [title, setTitle] = useState("")
    // let [error, setError] = useState<string | null>(null)

    // const addTask = () => {
    //     let newTitle = title.trim();
    //     if (newTitle !== "") {
    //         props.addTask(newTitle, props.id);
    //         setTitle("");
    //     } else {
    //         setError("Title is required");
    //     }
    // }

    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }

    // const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    //     setError(null);
    //     if (e.charCode === 13) {
    //         addTask();
    //     }
    // }

    // const removeTodolist = () => props.removeTodolist(props.id)

    const addTaskHandler = (title: string) => {
        props.addTask(title, props.id)
    }
    const editTitleTodolistHandler = (title: string) => {
        props.editTitleTodolist(props.id, title)
    }

    const changeFilterHandler=(filterValue:FilterValuesType)=>{
        props.changeFilter(filterValue,props.id)
    }


    return <div>
        <h3>
            <EditableSpan changeTitle={editTitleTodolistHandler} title={props.title}/>
            {/*<span>{props.title}</span>*/}
            {/*<button onClick={removeTodolist}>x</button>*/}
            <Button callBack={()=>props.removeTodolist(props.id)} name={'X'} />
        </h3>
        <AddItemForm addItem={addTaskHandler}/>
        <NewComponentMap
            tasks={props.tasks}
            removeTask={props.removeTask}
            changeTaskStatus={props.changeTaskStatus}
            editTitleTask={props.editTitleTask}
            todolistID={props.id}
        />

        <div>
            <Button callBack={()=>changeFilterHandler('all')} filter={props.filter} name={'all'}/>
            <Button callBack={()=>changeFilterHandler('active')} filter={props.filter} name={'active'}/>
            <Button callBack={()=>changeFilterHandler('completed')} filter={props.filter} name={'completed'}/>

        </div>
    </div>
}




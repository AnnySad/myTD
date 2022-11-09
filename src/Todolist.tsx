import React, {ChangeEvent, useState, KeyboardEvent, useCallback} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";
import {NewComponentMap} from "./components/NewComponentMap";
import {Button} from "@material-ui/core";
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

    const addTaskHandler = useCallback((title: string) => {
        props.addTask(title, props.id)
    },[props.addTask, props.id])

    const editTitleTodolistHandler = (title: string) => {
        props.editTitleTodolist(props.id, title)
    }

    const changeFilterHandler=(filterValue:FilterValuesType)=>{
        props.changeFilter(filterValue,props.id)
    }
   const removeTodolist=()=>{props.removeTodolist(props.id)}

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);


    return <div>
        <h3>
            <EditableSpan changeTitle={editTitleTodolistHandler} title={props.title}/>
            {/*<span>{props.title}</span>*/}
            {/*<button onClick={removeTodolist}>x</button>*/}
         {/*   <Button callBack={()=>props.removeTodolist(props.id)} name={'X'} />*/}
            <IconButton onClick={removeTodolist} >
                <Delete />
            </IconButton>
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
           {/* <Button  callBack={()=>changeFilterHandler('all')} filter={props.filter} name={'all'}/>*/}
           {/* <Button callBack={()=>changeFilterHandler('active')} filter={props.filter} name={'active'}/>
            <Button callBack={()=>changeFilterHandler('completed')} filter={props.filter} name={'completed'}/>
           */}
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
    </div>
}




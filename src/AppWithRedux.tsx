import React, {useCallback, useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@material-ui/core";
import {Menu} from "@material-ui/icons";
import {
    AddTodolistAC,
    ChangeFilterAC,
    EditTitleTodolistAC,
    RemoveTodolistAC,
    todolistsReducer
} from "./reducer/todolistsReducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from "./reducer/tasksReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function AppWithRedux() {
    let todolistId1 = v1();
    let todolistId2 = v1();


   /* let [todolists, dispatchToTodolists] = useReducer(todolistsReducer, [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}

    ])*/

    /*let [tasks, dispatchToTasks] = useReducer(tasksReducer, {
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: false},
            {id: v1(), title: "React Book", isDone: true}
        ]

    });*/


const tasks = useSelector<AppRootStateType, TasksStateType>(state=> state.tasks)
const todolists = useSelector<AppRootStateType, Array<TodolistType>>(state=> state.todolists)

    const dispatch = useDispatch()

    const editTitleTodolist = (todolistId: string, title: string) => {
        dispatch(EditTitleTodolistAC(todolistId,title))
    }
    const addTodolist = useCallback((newTitle: string) => {
        let action = AddTodolistAC(newTitle)
        dispatch(action)
    },[dispatch,AddTodolistAC])

    function removeTodolist(id: string) {
        let action = RemoveTodolistAC(id)
        dispatch(action)
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {
        dispatch(ChangeFilterAC(value, todolistId))
    }

    function removeTask(id: string, todolistId: string) {
        let action = removeTaskAC(id, todolistId)
        dispatch(action)
        //dispatchToTasks(removeTaskAC(id,todolistId))
    }

    const addTask=useCallback((title: string, todolistId: string) =>{
        dispatch(addTaskAC(title, todolistId))
    },[dispatch, addTaskAC])

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        dispatch(changeTaskStatusAC(id, isDone, todolistId))
    }

    const changeTitleTask = (taskID: string, title: string, todolistId: string) => {
        dispatch(changeTaskTitleAC(taskID, title, todolistId))
    }


    return (
        <div className="App">
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start' color='inherit' aria-label='menu'>
                        <Menu/>
                    </IconButton>
                    <Typography variant='h6'>
                        Todolist
                    </Typography>
                    <Button color='inherit'>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>

            <Container fixed>
                <Grid container style={{padding: '20px'}}>  {/*зададим верхнему гриду (вокруг AddItemForm) паддинг*/}
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}> {/*для родительского зададим spacing (отступы внутри между детьми)*/}
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistTasks;

                            if (tl.filter === "active") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === false);
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone === true);
                            }

                            return <Grid item key={tl.id}>
                                <Paper style={{padding: '10px'}}> {/*Обернем каждый тудулист Paper-ом
                                    с заданным дополнительным стилем для паддинга (внутренного отступа)*/}
                                    <Todolist
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        editTitleTodolist={editTitleTodolist}
                                        editTitleTask={changeTitleTask}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

    export default AppWithRedux;

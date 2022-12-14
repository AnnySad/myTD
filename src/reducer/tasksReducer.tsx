import {TasksStateType, TodolistType} from "../App";
import {v1} from "uuid";
import {AddTodolistAT, RemoveTodolistAT} from "./todolistsReducer";


type RemoveTasksAT = {
    type: "REMOVE-TASK",
    taskID: string,
    todolistId: string

}

type AddTaskAT = {
    type: "ADD-TASK",
    title: string,
    todolistId: string
}
type ChangeTaskStatusAT = {
    type: "CHANGE-TASK-STATUS",
    taskID: string,
    isDone: boolean,
    todolistId: string
}
type ChangeTaskTitleAT = {
    type: "CHANGE-TASK-TITLE",
    taskID: string,
    title: string,
    todolistId: string
}


export type ActionType =
    RemoveTasksAT
    | AddTaskAT
    | ChangeTaskStatusAT
    | ChangeTaskTitleAT
    | AddTodolistAT
    | RemoveTodolistAT

const initialState: TasksStateType = {}

export const tasksReducer = (tasksState= initialState, action: ActionType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK":
            return {
                ...tasksState,
                [action.todolistId]: tasksState[action.todolistId].filter(task => task.id !== action.taskID)
            }
        case "ADD-TASK":
            return {
                ...tasksState,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...tasksState[action.todolistId]]
            }
        case "CHANGE-TASK-STATUS":
            return {
                ...tasksState,
                [action.todolistId]: tasksState[action.todolistId]
                    .map(task => task.id === action.taskID ? {...task, isDone: action.isDone} : task)
            }
        case "CHANGE-TASK-TITLE":
            return {
                ...tasksState,
                [action.todolistId]: tasksState[action.todolistId]
                    .map(task => task.id === action.taskID ? {...task, title: action.title} : task)
            }

        case "ADD-TODO":
            return {
                ...tasksState,
                [action.todolistId]: []
            }
        case "REMOVE-TODO": {
            let newState = {...tasksState}
            delete newState[action.id]
            return newState
        }
        default:
            return tasksState
    }

}

//AC

export const removeTaskAC = (taskID: string, todolistId: string): RemoveTasksAT => {
    return {
        type: "REMOVE-TASK",
        taskID: taskID,
        todolistId: todolistId
    }
}
export const addTaskAC = (title: string, todolistId: string): AddTaskAT => {
    return {
        type: "ADD-TASK",
        title: title,
        todolistId: todolistId
    }
}
export const changeTaskStatusAC = (taskID: string, isDone: boolean, todolistId: string): ChangeTaskStatusAT => {
    return {
        type: "CHANGE-TASK-STATUS", taskID: taskID, isDone, todolistId
    }
}
export const changeTaskTitleAC = (taskID: string, title: string, todolistId: string): ChangeTaskTitleAT => {
    return {
        type: "CHANGE-TASK-TITLE", taskID: taskID, title, todolistId
    }
}



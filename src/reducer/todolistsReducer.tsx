import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


export type RemoveTodolistAT = {
    type: "REMOVE-TODO"
    id: string
}
export type AddTodolistAT = {
    type: "ADD-TODO"
    newTitle: string
    todolistId: string

}
type EditTitleTodolistAT = {
    type: "EDIT-TITLE-TODO"
    todolistId: string
    title: string
}
type ChangeFilterAT = {
    type: "CHANGE-FILTER-TODO"
    filter: FilterValuesType
    todolistId: string
}


export type ActionType = RemoveTodolistAT | AddTodolistAT | EditTitleTodolistAT | ChangeFilterAT

const initialState: Array<TodolistType> = []

export const todolistsReducer = (todolistsState = initialState, action: ActionType) => {
    switch (action.type) {
        case "REMOVE-TODO":
            return todolistsState.filter(tl => tl.id !== action.id)

        case "ADD-TODO":

            let newTodolist: TodolistType = {id: action.todolistId, title: action.newTitle, filter: "all"}
            return [newTodolist, ...todolistsState]

        case "EDIT-TITLE-TODO":
            return todolistsState.map(el => el.id === action.todolistId ? {...el, title: action.title} : el)

        case "CHANGE-FILTER-TODO":
            return todolistsState.map(el => el.id === action.todolistId ? {...el, filter: action.filter} : el)

        default:
            return todolistsState
    }

}

//AC

export const RemoveTodolistAC = (id: string): RemoveTodolistAT => {
    return {
        type: "REMOVE-TODO",
        id: id
    }
}
export const AddTodolistAC = (newTitle: string): AddTodolistAT => {
    return {
        type: "ADD-TODO",
        newTitle: newTitle,
        todolistId: v1()
    }
}
export const EditTitleTodolistAC =(todolistId: string,title: string):EditTitleTodolistAT=>{
    return{
        type: "EDIT-TITLE-TODO",
        todolistId: todolistId,
        title:title
    }
}
export const ChangeFilterAC = (value: FilterValuesType,todolistId: string):ChangeFilterAT => {
    return {
        type: "CHANGE-FILTER-TODO",
        filter: value,
        todolistId: todolistId
    }
}
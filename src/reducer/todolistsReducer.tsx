import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";


type RemoveTodolistAT = {
    type: "REMOVE-TODO"
    id: string
}
type AddTodolistAT = {
    type: "ADD-TODO"
    newTitle: string
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

export const todolistsReducer = (todolists: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case "REMOVE-TODO":
            return todolists.filter(tl => tl.id !== action.id)

        case "ADD-TODO":
            let newID = v1()
            let newTodolist: TodolistType = {id: newID, title: action.newTitle, filter: "all"}
            return [newTodolist, ...todolists]

        case "EDIT-TITLE-TODO":
            return todolists.map(el => el.id === action.todolistId ? {...el, title: action.title} : el)

        case "CHANGE-FILTER-TODO":
            return todolists.map(el => el.id === action.todolistId ? {...el, filter: action.filter} : el)

        default:
            return todolists
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
        newTitle: newTitle
    }
}
export const EditTitleTodolistAC =(todolistId: string,title: string):EditTitleTodolistAT=>{
    return{
        type: "EDIT-TITLE-TODO",
        todolistId: todolistId,
        title:title
    }
}
export const ChangeFilterAC = (filter: FilterValuesType,todolistId: string):ChangeFilterAT => {
    return {
        type: "CHANGE-FILTER-TODO",
        filter: filter,
        todolistId: todolistId
    }
}
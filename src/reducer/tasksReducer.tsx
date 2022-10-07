import {TasksStateType} from "../App";
import {v1} from "uuid";


type RemoveTasksAT = {
    type: "REMOVE-TASK",
    taskID: string,
    todolistId: string

}

type AddTaskAT ={
    type: "ADD-TASK",
    title: string,
    todolistId: string
}


export type ActionType = RemoveTasksAT | AddTaskAT

export const tasksReducer = (tasksState: TasksStateType, action: ActionType): TasksStateType=> {
    switch (action.type) {
        case "REMOVE-TASK":
            return {
                ...tasksState,
                [action.todolistId]: tasksState[action.todolistId].filter(task => task.id !== action.taskID)
            }
        case "ADD-TASK":
            return {
                ...tasksState,
                [action.todolistId]: [{id: v1(), title:action.title, isDone:false}, ...tasksState[action.todolistId]]
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
        title:title,
        todolistId: todolistId
    }
}



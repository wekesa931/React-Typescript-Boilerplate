import { ITodos } from '../types/Todos'

export const GET_TODO = "GET_TODO"

export interface GetTodoActionType {
    type: typeof GET_TODO
    todos: ITodos
}

export type TodoActionType = 
    | GetTodoActionType

export type AppActions = TodoActionType;
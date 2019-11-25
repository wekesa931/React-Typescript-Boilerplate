import { ITodos } from '../types/Todos'
import { TodoActionType } from '../types/actions'

const todoReducerDefaultState: ITodos[] = [];

export const allTodos = (state = todoReducerDefaultState, action: TodoActionType): ITodos[] => {
    switch(action.type){
        case "GET_TODO":
            return [...state, action.todos]
        default:
            return state
    }
}
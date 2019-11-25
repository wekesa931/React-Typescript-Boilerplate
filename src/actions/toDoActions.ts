import axios from 'axios'
import { Dispatch } from 'redux'
import { AppActions } from '../types/actions'

export const getTodos = () => async (dispatch: Dispatch<AppActions>) => {
    try {
        const todos = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        )
        dispatch({
            type: 'GET_TODO',
            todos: todos.data
        })
    }
    catch {
        // None
    }
}

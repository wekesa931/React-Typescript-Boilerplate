import { IPosts } from '../types/Posts'
import { TodoActionType } from '../types/actions'

const postsReducerDefaultState: IPosts[] = [];

export const allPosts = (state = postsReducerDefaultState, action: TodoActionType): IPosts[] => {
    switch(action.type){
        case "GET_POSTS":
            return [...state, action.allPosts]
        default:
            return state
    }
}
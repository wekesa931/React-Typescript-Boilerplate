import { IPosts } from '../types/Posts'
import { TodoActionType } from '../types/actions'

const postsReducerDefaultState: IPosts[] = [];
let singlePostReducerDefaultState: IPosts = {userId: 0, id: 0, title: '', body: ''};

export const allPosts = (state = postsReducerDefaultState, action: TodoActionType): IPosts[] => {
    switch(action.type){
        case "GET_POSTS":
            return [action.allPosts]
        default:
            return state
    }
}

export const singlePost = (state = singlePostReducerDefaultState, action: TodoActionType): IPosts => {
    switch(action.type){
        case "SINGLE_POST":
            return action.singlePost
        default:
            return state
    }
}
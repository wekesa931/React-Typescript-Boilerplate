import { ITodos } from '../types/Todos'
import { IPosts } from '../types/Posts'

export const GET_TODO = "GET_TODO"
export const GET_POSTS = "GET_POSTS"
export const SET_LOADER = "SET_LOADER"
export const SINGLE_POST = "SINGLE_POST"

export interface GetTodoActionType {
    type: typeof GET_TODO
    todos: ITodos
}

export interface GetPostsActionType {
    type: typeof GET_POSTS
    allPosts: IPosts
}

export interface SinglePostActionType {
    type: typeof SINGLE_POST
    singlePost: IPosts
}


export type TodoActionType = 
    | GetTodoActionType
    | GetPostsActionType
    | SinglePostActionType

export type AppActions = 
    | TodoActionType
    | GetPostsActionType
    | SinglePostActionType
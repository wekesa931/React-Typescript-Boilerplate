import { ITodos } from '../types/Todos'
import { IPosts } from '../types/Posts'

export const GET_TODO = "GET_TODO"
export const GET_POSTS = "GET_POSTS"

export interface GetTodoActionType {
    type: typeof GET_TODO
    todos: ITodos
}

export interface GetPostsActionType {
    type: typeof GET_POSTS
    allPosts: IPosts
}

export type TodoActionType = 
    | GetTodoActionType
    | GetPostsActionType

export type AppActions = 
    | TodoActionType
    | GetPostsActionType
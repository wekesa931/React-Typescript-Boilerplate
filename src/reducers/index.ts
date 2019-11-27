import { combineReducers } from 'redux'
import { allTodos } from "./todos";
import { allPosts, singlePost } from './postsReducers'

export const rootReducer = combineReducers({
    allTodos,
    allPosts,
    singlePost
  });
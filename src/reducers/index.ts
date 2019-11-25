import { combineReducers } from 'redux'
import { allTodos } from "./todos";
import { allPosts } from './postsReducers'

export const rootReducer = combineReducers({
    allTodos,
    allPosts
  });
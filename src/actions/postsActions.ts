import axios from 'axios'
import { Dispatch } from 'redux'
import { AppActions } from '../types/actions'

export const getPosts = () => async (dispatch: Dispatch<AppActions>) => {
    try {
        const posts = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        )
        dispatch({
            type: 'GET_POSTS',
            allPosts: posts.data
        })
    }
    catch {
        // None
    }
}

export const getSinglePost = (id: number) => async (dispatch: Dispatch<AppActions>) => {
    try {
        const singlePost = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        )
        dispatch({
            type: 'SINGLE_POST',
            singlePost: singlePost.data
        })
    }
    catch {
        // None
    }
}

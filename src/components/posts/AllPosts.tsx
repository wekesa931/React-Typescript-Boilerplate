import React, { ReactElement } from 'react'

import { IPosts } from '../../types/Posts'

interface Props {
    posts: {
        userId: number
        id: number
        title: string
        body: string
    }[]
}

function AllPosts(props: Props) {
    const { posts } = props

    // @ts-ignore
    const renderPosts = posts[0] && posts[0].map((post: IPosts, i): ReactElement => (
        <div key={i}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
        </div>
    ))
    return (
        <div>
            {renderPosts}
        </div>
    )
}

export default AllPosts

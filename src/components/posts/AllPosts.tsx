import React, { ReactElement, useState, useEffect } from 'react'
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom'

import { IPosts } from '../../types/Posts'

interface Props {
    posts: {
        userId: number
        id: number
        title: string
        body: string
    }[],
    isLoading: boolean
}
const { Meta } = Card;

const AllPosts = (props: Props) => {
	const {posts, isLoading} = props
	const [loading, setLoading] = useState(true)
	    // @ts-ignore
    const renderPosts = posts[0] && posts[0].map((post: IPosts, i: number): ReactElement => (
        <Link to={`/article/${post.id}`} key={i} style={{margin: '20px', cursor: 'pointer', overflow: 'hidden'}}>
					<Card style={{ width: 300, marginTop: 16, display: 'block', height: '225px' }} loading={loading}>
						<Meta
							avatar={
								<Avatar />
							}
							title={post.title}
							description={post.body}
						/>
					</Card>
        </Link>
		))
		
		const setLoader = async (): Promise<void> => {
			await setTimeout(() => {
				setLoading(isLoading)
			}, 2000);
		}
	
	useEffect(() => {
    if(!isLoading){
			setLoader()
		}
  });

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{renderPosts}
			</div>
    );
}

export default AllPosts;
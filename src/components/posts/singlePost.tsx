import React from 'react'
import { Card, Avatar } from 'antd';

const { Meta } = Card;

interface Props {
  singlePost: {userId: number, id: number, title: string, body: string}
}

function SinglePostItem(props: Props) {

  const { singlePost } = props

  return (
    <Card style={{ width: '80%', margin: '9%', display: 'block' }} loading={false}>
      <Meta
        avatar={
          <Avatar />
        }
        title={singlePost.title}
        description={singlePost.body.repeat(40)}
      />
    </Card>
  )
}

export default SinglePostItem

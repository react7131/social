import React from 'react'
import { Box } from '@mui/material'
import Post from './Post'
import avatar3 from '../images/avatar/c.jpg'
import avatar4 from '../images/avatar/d.jpg'
import avatar5 from '../images/avatar/e.jpg'
import post1 from '../images/posts/1.jpg'
import post2 from '../images/posts/2.jpg'
import post3 from '../images/posts/3.jpg'
import post4 from '../images/posts/4.jpg'
import post5 from '../images/posts/5.jpg'
import post6 from '../images/posts/6.jpg'

const posts= [
  {
    img: post1,
    name: 'Sara jackson',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, id.',
    date: 'September 14, 2016',
    avatar: avatar3
  },
  {
    img: post2,
    name: 'David jackson',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, id.',
    date: 'March 22, 2018',
    avatar: avatar4
  },
  {
    img: post3,
    name: 'sara jackson',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, id.',
    date: 'Novamber 2, 2017',
    avatar: avatar5
  },
  {
    img: post4,
    name: 'Daniel Abraham',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, id.',
    date: 'September 19, 2016',
    avatar: avatar4
  },
  {
    img: post5,
    name: 'sara jackson',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, id.',
    date: 'Agoust 11, 2017',
    avatar: avatar3
  },
  {
    img: post6,
    name: 'David jackson',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, id.',
    date: 'June 5, 2016',
    avatar: avatar4
  },
]

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {posts.map( (post, index) => (
        <Post key={index} img={post.img} date={post.date} name={post.name} description={post.description} avatar={post.avatar} />
      ))}
    </Box>
  )
}

export default Feed
import React from 'react'
import { Avatar, Checkbox, Typography, IconButton,  Card, CardHeader, CardMedia, CardContent, CardActions, Link } from '@mui/material'
import { Favorite, FavoriteBorder, Share, MoreVert, ChatBubbleOutline } from '@mui/icons-material'

function Post({ img, name, description, avatar, date}) {
  return (
    <Card margin='5'>
        <CardHeader
        avatar={
          <Avatar src={avatar} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={name}
        subheader={date}
      />
      <CardMedia
        component="img"
        height= '20%'
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox 
          color='error' 
          icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutline />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post
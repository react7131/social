import { Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem, List, ListItemAvatar, ListItem, ListItemText, Divider } from '@mui/material'
import React from 'react'
import a from '../images/i1.jpg'
import b from '../images/i2.jpg'
import c from '../images/i3.jpg'
import avatar1 from '../images/avatar/a.jpg'
import avatar2 from '../images/avatar/b.jpg'
import avatar3 from '../images/avatar/c.jpg'
import avatar4 from '../images/avatar/d.jpg'
import avatar5 from '../images/avatar/e.jpg'

const itemData = [
  {
    img: a,
    title: 'breakfast'
  },
  {
    img: b,
    title: 'sandwitch'
  },
  {
    img: c,
    title: 'camera'
  },
]

const avatarData = [
  {
    img: avatar1,
    title: 'jack'
  },
  {
    img: avatar2,
    title: 'sam'
  },
  {
    img: avatar3,
    title: 'sara'
  },
  {
    img: '',
    title: 'david'
  },
  {
    img: avatar4,
    title: 'Tom'
  },
  {
    img: avatar5,
    title: 'jenifer'
  },
  {
    img: avatar2,
    title: 'sam'
  },
  {
    img: avatar3,
    title: 'sara'
  },
  {
    img: avatar4,
    title: 'tom'
  },
]

const Rightbar = () => {
  return (
    <Box 
      flex={2}
      p={2}
      sx={{display: {xs: 'none', md: 'block'}}}
    >
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100} >Online Friends</Typography>
        <AvatarGroup max={7}>
          {avatarData.map( (avatar, i) => <Avatar key={i} alt={avatar.title} src={avatar.img} />)}
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
          ))}
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversations</Typography>
        <List >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={avatar1} />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={avatar2} />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={avatar3} />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
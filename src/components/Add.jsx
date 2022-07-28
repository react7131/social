import { Tooltip, Fab, Modal, Box, Typography, Avatar, TextField, Button, styled, ButtonGroup } from '@mui/material'
import { Add, DateRange, EmojiEmotions, InsertPhoto, PersonAdd, VideoCameraBack } from  '@mui/icons-material'
import React, { useState } from 'react'

function AddPost() {

  const [open, setOpen] = useState(false)

  const style = {
    width: 400,
    // height: 280,
    bgcolor: "background.default",
    color: "text.primary",
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
  };

  const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  })

  return (
    <>
    <Tooltip 
      title='Add New Post' 
      placement='top' 
      sx={{position: 'fixed', bottom: 20, left: { xs: "calc(50% - 25px)", md: 30}}}
      onClick={() => setOpen(true)}
    >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
    </Tooltip>
    <StyledModal
        open={open}
        onClose={() => setOpen(false)}
    >
        <Box sx={style}>
            <Typography textAlign='center' variant="h6" color='gray'>
                Create Post
            </Typography>
            <Box display='flex' alignItems='center' gap='10px' mb='20px'>
                <Avatar sx={{width: 30, height: 30}} alt="John" src="https://material-ui.com/static/images/avatar/1.jpg" />
                <Typography variant="span" fontWeight={500}>
                    John Doe
                </Typography>
            </Box>
                <TextField
                  multiline
                  rows={3}
                  placeholder="What's on your mind?"
                  variant="standard"
                  fullWidth
                  focused
                />
            <Box mt={2} mb={3} display='flex' gap={1}>
              <EmojiEmotions color='primary' />
              <InsertPhoto color='secondary' />
              <VideoCameraBack color='success' />
              <PersonAdd color='error' />
            </Box>
            <ButtonGroup variant="contained" fullWidth>
              <Button>Post</Button>
              <Button sx={{width: '100px'}}><DateRange /></Button>
            </ButtonGroup>
        </Box>
    </StyledModal>
    </>
  )
}

export default AddPost
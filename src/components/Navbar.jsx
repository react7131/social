import { AppBar, styled, Toolbar, Typography, Badge, Box, InputBase, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react';
import { Pets, Mail, Notifications } from '@mui/icons-material';
import girl from '../images/avatar/1.jpg'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent:'space-between'
})

const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
}));

const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    alignItems: 'center',
    gap: '20px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}));

function Navbar() {

  const [open, setOpen] = useState(false);
 
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display: { xs:'none', sm:'block'}}} >Rogayeh</Typography>
            <Pets sx={{display: { xs:'block', sm:'none'}}}/>
            <Search><InputBase placeholder='search...' /></Search>
            <Icons>
                <Badge badgeContent={4} color='error'>
                    <Mail />
                </Badge>
                <Badge badgeContent={4} color='error'>
                    <Notifications />
                </Badge>
                <Avatar 
                    src={girl}  
                    sx={{width: 30, height: 30}}
                    onClick={ () => setOpen(true)}    
                />
                <Menu
                    id="demo-positioned-menu"
                    open={open}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </Icons>
            <UserBox onClick={() => setOpen(true)}>
                <Avatar src={girl} sx={{width: 30, height: 30}} />
                <Typography varient='span'>Sara</Typography>
            </UserBox>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar
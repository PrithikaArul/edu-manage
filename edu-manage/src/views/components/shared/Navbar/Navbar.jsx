import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Avatar from '@mui/material/Avatar';
import SideNavbar from '../SideNavbar/SideNavbar';
import NavbarLogo from '../../../../assets/NavbarLogo.png';


export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  
  const handleClose = () => {
    setAnchorEl(null);
  };


return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar color='white' position="static" >
            <Toolbar sx={{width:"100%"}}>
                <SideNavbar/>
                <img src={NavbarLogo} style={{width:40,height:40,marginLeft:10}}/>
                <Box sx={{ flexGrow: 1 }} />
                    <div>
                        <IconButton>
                        <Avatar sx={{bgcolor:'#B3CCC9', color:'black'}}>A</Avatar>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
            </Toolbar>
        </AppBar>
    </Box>
);
}

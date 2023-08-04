import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Css, Domain } from '@mui/icons-material';
import { CssVarsProvider } from '@mui/joy';

import Card from '@mui/joy/Card';


import Dropdown from '@mui/joy/Dropdown';
import MenuItem from '@mui/joy/MenuItem';
import MoreVert from '@mui/icons-material/MoreVert';
import IconButton from '@mui/joy/IconButton';
import Menu from '@mui/joy/Menu';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';
import MenuButton from '@mui/joy/MenuButton';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <Box
    sx={{
      flexGrow: 1,

      borderRadius: 'md',
    }}
  >
    <Card size="md" variant='solid' sx={{ bgcolor: '#6c07ff', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
    <Link style={{ textDecoration: 'none', color: 'white' }}
          to={{
            pathname: "/home",
          }}>
  <Typography align="center" sx={{ flexGrow: 0, color: 'white'}}>letsviral.in</Typography>
  </Link>
  <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'outlined', color: 'neutral' } }}
      >
        <MoreVert />
      </MenuButton>
      <Menu placement="bottom-end">
      <Link style={{ textDecoration: 'none', color: 'white' }}
          to={{
            pathname: "/profile",
          }}>
        <MenuItem>Profile</MenuItem> 
        </Link>
        <Link style={{ textDecoration: 'none', color: 'white' }}
            to={{
                pathname: "/home",
            }}>
                <MenuItem>Home</MenuItem>
            </Link>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Dropdown>
      </Card>
    </Box>
  );
}

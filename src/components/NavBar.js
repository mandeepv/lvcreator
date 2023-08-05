import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/joy/Card';
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import IconButton from '@mui/joy/IconButton';
import MoreVert from '@mui/icons-material/MoreVert';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';


export default function NavBar({ showMenuButton = true }) {
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
            style={{ opacity: showMenuButton ? 1 : 0 }} // this line makes the button transparent if showMenuButton is false
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

import * as React from 'react';
import { Drawer,Box,IconButton, Typography} from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useState } from 'react';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AlignVerticalBottomRoundedIcon from '@mui/icons-material/AlignVerticalBottomRounded';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
export default function MenuDrawer(){

  //side panel functions
    const[drawerOpen,setDrawerOpen]=useState(false);

    const handleDrawer=()=>{
        setDrawerOpen(!drawerOpen);
    }
    // nested List of side panel
const [open, setOpen] = React.useState(false);

const handleClick = () => {
  setOpen(!open);
};
  return (
   <>
   <IconButton color='inherit' size='large' onClick={handleDrawer}>
    <MenuRoundedIcon/>
   </IconButton>
   <Drawer 
   anchor='right'
   open={drawerOpen}
  >
<Box>
<List
      sx={{ width: '100%', minHeight:800, maxWidth:600,backgroundColor:'black',color:'green'}}
      component="nav"
      aria-labelledby="MENU"
    >
       <ArrowBackIosRoundedIcon 
      onClick={handleDrawer}
      sx={{color:'white'}}/>
     <Typography variant='h6' sx={{color:'white'}}>CATALOGUE</Typography>
       <ListItemButton component={Link} href='Dashboard'>
        <ListItemIcon color='green'>
          <PaidIcon variant='contained'sx={{color:'green'}} />
        </ListItemIcon>
        <ListItemText primary="BUDGET" />
      </ListItemButton>
      
      <ListItemButton  onClick={handleClick}>
        <ListItemIcon>
          <ShowChartIcon variant='contained' sx={{color:'green'}}/>
        </ListItemIcon>
        <ListItemText primary="STOCKS" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }} component={Link} href='ApplStock'>
            <ListItemIcon>
              < AlignVerticalBottomRoundedIcon sx={{color:'green'}}/>
            </ListItemIcon>
            <ListItemText primary="APPLE" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} href='AmznStock'>
            <ListItemIcon>
              < AlignVerticalBottomRoundedIcon sx={{color:'green'}}/>
            </ListItemIcon>
            <ListItemText primary="AMAZON" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} href='IbmStock'>
            <ListItemIcon>
              < AlignVerticalBottomRoundedIcon sx={{color:'green'}}/>
            </ListItemIcon>
            <ListItemText primary="IBM" />
          </ListItemButton>

          <ListItemButton sx={{ pl: 4 }} component={Link} href='MsftStock'>
            <ListItemIcon>
              < AlignVerticalBottomRoundedIcon sx={{color:'green'}}/>
            </ListItemIcon>
            <ListItemText primary="MICROSOFT" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton component={Link} href='SignInSide'>
        <ListItemIcon>
          < LogoutOutlinedIcon variant='contained' sx={{color:'green'}}/>
        </ListItemIcon>
        <ListItemText primary="LOGOUT" />
      </ListItemButton>
      </List>
    </Box>
   </Drawer>
   </>
  )
}
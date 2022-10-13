import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import { MenuOutlined } from '@mui/icons-material';

import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const MenuList = () => {
  
  const [state, setState] = React.useState({
    left: false,
  });


  // SE ASIGNA LA RUTA AL BOTON QUE CORRESPONDE
  const navigate = useNavigate();

  const onCrearNota = (text) => {
    if ( text === 'Editar notas')
    return navigate('/EditarNotas');
  }

  //
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Economia', 'Politica', 'Deportes', 'Espectaculos'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton >
              <ListItemIcon>
                {text === 'Economia' ? <AccountBalanceOutlinedIcon /> : '' }
                {text === 'Politica' ? <GavelOutlinedIcon /> : '' }
                {text === 'Deportes' ? <SportsSoccerOutlinedIcon /> : '' }
                {text === 'Espectaculos' ? <GradeOutlinedIcon /> : '' }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Editar notas'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon >
                {index % 2 === 0 ? <EditOutlinedIcon /> : ''}
              </ListItemIcon>
              <ListItemText primary={text} onClick={ () => onCrearNota(text) } />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );



  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="outlined" color='secondary' onClick={toggleDrawer(anchor, true)}><MenuOutlined />SECCIONES</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

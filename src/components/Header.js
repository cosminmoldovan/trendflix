import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../images/mob-logo.svg';



const drawerWidth = 240;

function Header(props) {
  return (
    <AppBar
      position="fixed"
      sx={{
        display: {
          md: 'none'
        }
      }}
    >
      <Toolbar
      sx={{
        display: 'flex',
        gap: '32px',
        justifyContent: 'space-between',
      }}
      
      >
        <NavLink to="/">
        <Logo />
        </NavLink>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={props.function}
          sx={{ mr: 2,}}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
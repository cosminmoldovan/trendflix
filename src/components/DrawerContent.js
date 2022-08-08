import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import TvIcon from '@mui/icons-material/Tv';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

import { ReactComponent as Logo } from '../images/logo.svg';
import { ReactComponent as Tmdb } from '../images/tmdb.svg';


import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';


function DrawerContent() {

  const location = useLocation();

  function toggleSelected() {
    const path = location.pathname;
    let btns = document.getElementsByClassName('item-btn');
    for (let i = 0; i < btns.length; i++) {
      if (btns.item(i).dataset.path === path) {
        btns.item(i).classList.add('Mui-selected')
      }
      else {
        btns.item(i).classList.remove('Mui-selected')
      }
    }

  }
  React.useEffect(() => {
    toggleSelected();
    // eslint-disable-next-line
  }, [location])


  const iconStyle = {
    fontSize: '20px',
  }
  const navLink = {
    width: "100%",
  }

  return (
    <div style={{ display: 'flex',height: '100vh', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <Toolbar sx={{ ml: 1 }}>
          <Logo />
        </Toolbar>
        <Divider variant='middle' />
        <List>
          <ListItem>
            <NavLink to="/" style={navLink}>
              <ListItemButton className="item-btn" data-path="/trendflix/">
                <ListItemIcon sx={iconStyle}>
                  <HomeRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink to="/trending" style={navLink}>
              <ListItemButton className="item-btn" data-path="/trendflix/trending">
                <ListItemIcon sx={iconStyle}>
                  <WhatshotIcon />
                </ListItemIcon>
                <ListItemText primary="Trending" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink to="/movies" style={navLink}>
              <ListItemButton className="item-btn" data-path="/trendflix/movies">
                <ListItemIcon sx={iconStyle}>
                  <MovieRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Movies" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink to="/tv" style={navLink}>
              <ListItemButton className="item-btn" data-path="/trendflix/tv">
                <ListItemIcon sx={iconStyle}>
                  <TvIcon />
                </ListItemIcon>
                <ListItemText primary="TV Shows" />
              </ListItemButton>
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink to="/search" style={navLink}>
              <ListItemButton className="item-btn" data-path="/trendflix/search">
                <ListItemIcon sx={iconStyle}>
                  <SearchRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
        <Divider variant='middle' />
      </div>
      <div>
        <List sx={{ pl: 2, pb: 4 }}>
          <ListItem>
            <Typography variant="caption"><a className="simple-link" href='#'>DMCA</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a className="simple-link" href='#'>Contact Us</a></Typography>
          </ListItem>
          <ListItem>
            <a href="https://www.themoviedb.org" target="_blank" rel="noreferrer" style={{ width: '100%' }}>
              <Typography variant="caption">powerd by</Typography> <Tmdb />
            </a>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
export default DrawerContent;
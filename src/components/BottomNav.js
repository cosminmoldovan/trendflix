import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";



import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieRoundedIcon from '@mui/icons-material/MovieRounded';
import TvIcon from '@mui/icons-material/Tv';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{
         width: '100%',
         position: 'fixed',
         left: '0',
         bottom: '0',
         zIndex:'999',
         display: {
            md: 'none'
         },
         "& .MuiBottomNavigation-root": {
          backgroundColor: '#1E222B',
          borderTop: '1px solid #393d45',
         }
         }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* <BottomNavigationAction label="Home" icon={<HomeRoundedIcon />} /> */}
        <BottomNavigationAction component={Link} to="/" label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction component={Link} to="/movies" label="Movies" icon={<MovieRoundedIcon />} />
        <BottomNavigationAction component={Link} to="/tv" label="TV Shows" icon={<TvIcon />} />
        <BottomNavigationAction component={Link} to="/search" label="Search" icon={<SearchRoundedIcon />} />
      </BottomNavigation>
    </Box>
  );
}

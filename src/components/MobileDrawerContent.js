import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ReactComponent as Tmdb } from '../images/tmdb.svg';
import { Typography } from '@mui/material';


function MobileDrawerContent() {

  return (
    <div>
      <List>
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
  );
}
export default MobileDrawerContent;
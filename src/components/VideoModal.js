import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import styled from 'styled-components';

const VideoDialog = styled(Dialog)(() => ({
  '& .MuiPaper-root': {
    maxWidth: '854px',
    width: '100%',
    height: 'auto',
  },
}));
const videoSet= {
  backgroundColor: '#000',
  width: '100%',
  height: 'auto',
  aspectRatio: '16 / 9',
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VideoModal(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='parent-modal'>
      <Button variant="contained" onClick={handleClickOpen} startIcon={<PlayArrowRoundedIcon />}>
        Play Trailer
      </Button>
      <VideoDialog
        maxWidth={false}
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar sx={{ backgroundColor: '#000', boxShadow: 'none' }}>
            <Typography sx={{ ml: 2, flex: 1, mr: 3, fontSize: {xs:'14px', sm: '16px',md: '18px', lg: '20px' } }} component="div"  noWrap={true}>
              {props.title}
            </Typography>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <iframe style={videoSet} src={`https://www.youtube.com/embed/${props.path}`} title="THE NORTHMAN - Official Trailer 2 - Only in Theaters April 22" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </VideoDialog>
    </div>
  );
}


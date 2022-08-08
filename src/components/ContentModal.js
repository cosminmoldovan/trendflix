import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import GoogleIcon from '@mui/icons-material/Google';
import StarIcon from '@mui/icons-material/Star';
import { img_500, unavailable, unavailableLandscape } from '../config/config';
import VideoModal from './VideoModal';
import Carousel from './Carousel';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContentModal({ children, media_type, id }) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState();
  const [video, setVideo] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    setContent(data);
  }
  const fetchVideo = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    const officialTrailers = data.results.filter(video => video.official===true && video.type==='Trailer');
    setVideo(officialTrailers[officialTrailers.length - 1]?.key);
  }
  React.useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);
  let title, year, genres, runtime, seasons, vote;
  if (content) {
    title = content.title || content.name;
    year = (
      content.first_air_date ||
      content.release_date ||
      "----"
    ).substring(0, 4);
    runtime = content.episode_run_time || content.runtime;
    let minutes = runtime % 60;
    let hours = (runtime - minutes) / 60;
    runtime = hours && minutes ? hours + 'h ' + minutes + 'm' : hours ? hours + 'h' : minutes ? minutes + 'm' : "";
    vote = (content.vote_average).toFixed(1) > 0 ? (content.vote_average).toFixed(1) : 'NR';
    genres = content.genres.length > 0 && content.genres.map(g => g.name).reduce((acc, curr) => acc + ', ' + curr);
    seasons = content.number_of_seasons && content.number_of_seasons + ' season' + (content.number_of_seasons > 1 ? 's' : '') + (runtime ? (' (' + runtime + '/ep)') : '')

  }
  return (
    <div className='parent-modal'>
      <div onClick={handleClickOpen}>
        {children}
      </div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>

            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {content && (content.title || content.name)}
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

        {content &&
          <div className='modal'>
            <div className='modal-left'>
              <img src={content.poster_path ? `${img_500}/${content.poster_path}` : unavailable} alt={content.name || content.title} className='modal-portret-img' />
              <img src={content.backdrop_path ? `${img_500}/${content.backdrop_path}` : unavailableLandscape} alt={content.name || content.title} className='modal-landscape-img' />
            </div>

            <div className='modal-right'>
              <div className='media-type-box-mobile'>
                {media_type === 'tv' ? 'TV Show' : 'Movie '}
              </div>

              <div className='title'>
                <Typography gutterBottom variant="h4" component="h4">
                  <span>{title}</span>
                  <span className='op8'>&nbsp;({year})</span>
                </Typography>
              </div>

              <div className='subtitle'>
                <Typography component="div" className='media-type-box'>
                  {media_type === 'tv' ? 'TV Show' : 'Movie '}
                </Typography>
                <Typography component="span" sx={{ lineHeight: "2" }} className="op8">
                  <span style={{ display: "inline-block" }}>{genres}</span>
                  &nbsp;&bull;&nbsp;
                  <span style={{ display: "inline-block" }}>{media_type === 'tv' ? seasons : runtime}</span>
                </Typography>
              </div>
              <div className='rating-video'>
                <div className='rating'>
                  <Typography variant="h4" component="span" sx={{ color: '#faaf00' }}>
                    <StarIcon />&nbsp;{vote}
                    {vote !== 'NR' && <span className="op8" style={{ fontSize: '18px' }}>/10</span>}
                  </Typography>
                  <Typography variant="body2" component="span" className='op8' ml={1}>
                    ({vote === 'NR' ? 'Not Rated' : <span title='www.themoviedb.org'>TMDb rating</span>})
                  </Typography>
                </div>
                <VideoModal title={title} path={video} />
              </div>

              <div className='overview'>
                <Typography gutterBottom variant="h6" component="h6" mt={4}>
                  Overview
                </Typography>
                <Typography component="div" sx={{ maxWidth: '66ch' }} className='op8'>
                  {content.overview ? content.overview :
                    <Typography component="div">
                      Sorry! We don't have an overview translated in English.<br></br>
                      <Button target="_blank" href={`https://www.google.com/search?q=${title} ${year}`} variant="contained" sx={{ mt: 2 }} startIcon={<GoogleIcon />}>search on google</Button>
                    </Typography>
                  }
                </Typography>
              </div>

              <div className='cast'>
                <Typography variant="h6" component="h6" mb={2}>
                  Cast
                </Typography>
                <Carousel media_type={media_type} id={id} />
              </div>

            </div>

          </div>
        }
      </Dialog>
    </div>
  );
}

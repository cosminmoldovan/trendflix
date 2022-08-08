import axios from 'axios';
import { useState, useEffect } from 'react'; 
import Carousel from 'react-material-ui-carousel'
import { img_backdrop, unavailableLandscape } from '../config/config';
import { Button, Typography } from '@mui/material'
import ContentModal from './ContentModal';

function Slide(props) {
  return (
    <div className='slide' style={{ backgroundImage: `url(${props.backdrop_path ? `${img_backdrop}/${props.backdrop_path}` : unavailableLandscape})` }}>
      <div className='slide__cover'>
      <Typography variant="h4" noWrap={true}>{props.title || props.name}</Typography>
      <ContentModal media_type={props.media_type} id={props.id}>
        <Button variant="contained">
        {/* discover {props.media_type === 'tv' ? 'tv show' : 'movie'} */}
        Show more
        </Button>
      </ContentModal>
      </div>

    </div>
  )
}

export default function Slider(props) {
  const [content, setContent] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`);
    setContent(data.results);
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <Carousel indicators={false} navButtonsAlwaysVisible swipe
    navButtonsProps={{
      style: {
          backgroundColor: 'rgba(0,0,0,0.4)',
          color: 'white',
      }
  }}
    >
      {
        content && content.slice(0, 10).map(item => (
          <Slide key={item.id}
            {...item}
          ></Slide>
        ))
      }
    </Carousel>
  )
}


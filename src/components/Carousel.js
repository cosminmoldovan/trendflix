import axios from 'axios';
import React from 'react';
import { img_300, avatar } from '../config/config';

const Carousel = ({media_type, id}) => {
  const [credits, setCredits] = React.useState();
  const fetchCredits = async () => {
    const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    setCredits(data.cast);
  }
  React.useEffect(()=>{
    fetchCredits();
    // eslint-disable-next-line
  }, [])
  const items = credits?.map((c)=> (
      <div key={c.cast_id} className='carousel-item' title={c?.name} style={{backgroundImage:`url(${c.profile_path ? `${img_300}/${c.profile_path}` : avatar})`}}>
      <div className="carousel-item__cover">
        <p className="carousel-item__name" >
        {c?.name}
        </p>
        <p className="carousel-item__char">
        {c?.character}
        </p>
      </div>
    </div>
    ));
  return (
    <div className='carousel'>
      {items}
    </div>
  );
}
export default Carousel;
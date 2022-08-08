import { Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import Genres from '../components/Genres';
import Paging from "../components/Paging";
import useGenre from "../hooks/useGenre";
import TvIcon from '@mui/icons-material/Tv';


function Series() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)

    setContent(data.results);
    setNumOfPages(data.total_pages);

  }
  useEffect(() => {
    fetchMovies();
  }, [page, genreforURL])
  return (
    <div className='container'>
      <Typography variant="h4" component="div" mb={4}>
       TV Shows
      </Typography>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="card-grid">
        {
          content && content.map(item => {
            return <Card key={item.id} {...item} media_type="tv"/>
          })

        }
      </div>
      {numOfPages > 1 &&
        <Paging setPage={setPage} numOfPages={numOfPages > 500 ? 500 : numOfPages} />
      }
    </div>
  )
}

export default Series
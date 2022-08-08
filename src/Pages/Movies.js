import { Typography } from '@mui/material';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Card from "../components/Card";
import Genres from '../components/Genres';
import Paging from "../components/Paging";
import useGenre from "../hooks/useGenre";

function Movies() {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const genreforURL = useGenre(selectedGenres);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setContent(data.results);
    setNumOfPages(data.total_pages);

  }
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page, genreforURL])
  return (
    <div className='container'>
      <Typography variant="h4" component="h4" mb={4}>
      Movies
      </Typography>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      <div className="card-grid">
        {
          content && content.map(item => {
            return <Card key={item.id} {...item} media_type="movie" />
          })

        }
      </div>
      {numOfPages > 1 &&
        <Paging setPage={setPage} numOfPages={numOfPages > 500 ? 500 : numOfPages} />
      }
    </div>
  )
}

export default Movies
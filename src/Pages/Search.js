import { Button, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from "../components/Card";
import Paging from "../components/Paging";

function Search() {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1)
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const fetchSearch = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
    setContent(data.results);
    setNumOfPages(data.total_pages);
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [type, page])
  return (
    <div className='container'>
      <Typography variant="h4" component="h4" mb={4}>
      Search
      </Typography>
      <Stack
        direction="row"
        justifyContent="center"
        mb={4}
      >
        <TextField
          style={{ flex: 1 }}
          className="search-box"
          label="Search"
          variant='filled'
          onChange={(e) => { setSearchText(e.target.value) }}
        />
        <Button 
        variant="contained"
        sx={{ ml: 2 }}
        onClick={fetchSearch}
         >
          <SearchIcon />
        </Button>
      </Stack>
      <Tabs
        value={type}
        indicatorColor='primary'
        textColor='primary'
        centered variant='fullWidth'
        sx={{ mb: 5 }}
        onChange={(event, newValue) => {
          setType(newValue);
          setPage(1);
        }}
      >
        <Tab label="Search Movies"></Tab>
        <Tab label="Search Tv Shows"></Tab>
      </Tabs>
      <div className="card-grid">
        {
          content && content.map(item => {
            return <Card key={item.id} {...item} media_type={type ? "tv" : "movie"}/>
          })

        }
      </div>
      { (numOfPages < 1 && content.length === 0) &&
        (type ?
          <Typography variant="h4" component="h4">No Tv Shows Found</Typography> :
          <Typography variant="h4" component="h4">No Movies Found</Typography>
        )
      }
      {numOfPages > 1 &&
        <Paging setPage={setPage} numOfPages={numOfPages > 500 ? 500 : numOfPages} />
      }
    </div>
  )
}

export default Search
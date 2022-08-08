import Home from '../Pages/Home';
import Trending from '../Pages/Trending';
import Movies from '../Pages/Movies';
import Series from '../Pages/Series';
import Search from '../Pages/Search';
import { Box } from "@mui/system";
import {Route, Routes } from "react-router-dom";

const drawerWidth = 240;




function Main(){
    return (
        <Box
        component="main"
        sx={{ flexGrow: 1, width: {xs: '100%', md: `calc(100% - ${drawerWidth}px)` }, }}
      >
        <Routes>
            <Route path="/trendflix/" exact element={<Home />}></Route>
            <Route path="/trendflix/trending" element={<Trending />}></Route>
            <Route path="/trendflix/movies" element={<Movies />}></Route>
            <Route path="/trendflix/tv" element={<Series />}></Route>
            <Route path="/trendflix/search" element={<Search />}></Route>
        </Routes>
      </Box>
    );
}
export default Main;
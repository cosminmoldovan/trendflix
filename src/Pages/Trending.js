import { Divider, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Paging from "../components/Paging";

function Trending() {
    const [content, setContent] = useState([]);
    const [page, setPage] = useState(1);
    const fetchTrending = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`);
        setContent(data.results);
    }
    useEffect(() => {
        fetchTrending();
    }, [page])

    return (
        <div className='container'>
            <Typography variant="h4" component="h4" mb={5}>
            Trending 
            </Typography>
            <div className="card-grid">
                {
                    content && content.map(item => {
                        return <Card key={item.id} {...item} />
                    })

                }
            </div>
            <Paging setPage={setPage} />
        </div>
    );
}
export default Trending;
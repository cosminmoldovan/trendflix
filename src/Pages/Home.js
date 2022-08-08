import HSC2 from '../components/HSC2';

import Slider from '../components/Slider';

function Home() {
  const trendingTabs = [
    {
      name: 'Today',
      api: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`,
    },
    {
      name: 'This Week',
      api: `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
    }
  ];

  const popularTabs = [
    {
      name: 'Movies',
      api: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      media_type: 'movie'
    },
    {
      name: 'Tv Shows',
      api: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      media_type: 'tv'
    }
  ];
  const topRatedTabs = [
    {
      name: 'Movies',
      api: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      media_type: 'movie'
    },
    {
      name: 'Tv Shows',
      api: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`,
      media_type: 'tv'
    }
  ];

  return (
    <div>
      <Slider />
      <div style={{ padding: "64px 5vw 64px 5vw" }}>
        <HSC2 name="Trending" tabs={trendingTabs}/>
        <HSC2 name="Popular" tabs={popularTabs}/>
        <HSC2 name="Top Rated" tabs={topRatedTabs}/>
      </div>
    </div>
  );
}
export default Home;
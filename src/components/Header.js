import React,{useState, useEffect} from 'react';
import './Header.css';
import axios from '../api call/axios';
import request from '../api call/request';

function Header() {

  const [movie, setMovie] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get(request.fetchNetflixOriginals);
    setMovie(response.data.results[
      Math.floor(Math.random() * response.data.results.length - 1)
    ]);
  };
  
  useEffect(() => {
    fetchApi();
  }, []);
  
  console.log(movie);
  
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
          )`,
          backgroundPosition: "center center",
        backgroundSize: 'cover',
      }}
    >
      <div className="banner__content">
        <h1>{movie.title || movie.name}</h1>
        <div className="banner__buttons">
          <button className='banner__btn'>Play</button>
          <button className='banner__btn'>My List</button>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 280)}</p>
      </div>
        <div className="banner__fade"></div>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../api call/axios';

function Row({ title, fetchURL, isLongPoster }) {
  const [movies, setMovies] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get(fetchURL);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchApi();
  }, [fetchURL]);

  const baseURL = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            ((isLongPoster && movie.poster_path) ||
              (!isLongPoster && movie.backdrop_path)) && (
              <img
              className={`rowPoster ${isLongPoster && 'rowLongPoster'}`}
                src={`${baseURL}${
                  isLongPoster ? movie.poster_path : movie.backdrop_path
                }`}
                alt="movie"
              />
            )
          );
        })}
      </div>
    </div>
  );
}

export default Row;

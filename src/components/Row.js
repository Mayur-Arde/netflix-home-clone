import React, { useState, useEffect } from 'react';
import './Row.css';
import axios from '../api call/axios';

import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
function Row({ title, fetchURL, isLongPoster, id }) {
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
      <h2>{title}</h2>
      <div class="slider">
        <div className=" arrow arrow__left">
          <span
            className="icon__left"
            onClick={() => {
              document.getElementById(id).scrollLeft -= window.innerWidth - 80;
            }}
          >
            <FaArrowLeft />
          </span>
        </div>
        <div id={id} className="row__posters">
          {/**SEVERAL ROW__POSTER */}
          {movies.map((movie) => (
            <img
              key={movie.id}
              className={`rowPoster ${isLongPoster && 'rowLongPoster'}`}
              src={`${baseURL}${
                isLongPoster ? movie.poster_path : movie.backdrop_path
              }`}
              loading="lazy"
              alt={movie.name}
            />
          ))}
        </div>
        <div className="arrow arrow__right">
          <span
            className="icon__right"
            onClick={() => {
              document.getElementById(id).scrollLeft += window.innerWidth - 80;
            }}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Row;

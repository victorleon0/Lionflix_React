import React, { useState } from "react";
import { useEffect } from "react";



import tmdbApi from "../../api/tmdb.api";

import MovieCard from "./MovieCard";
import "./MoviesList.scss";

const MoviesList = () => {
  
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdbApi.get("movie/popular");
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="moviesList">
      {movies.map((movie, index) => {
        return <MovieCard key={index} {...movie} />
      })}
    </div>
  );
};

export default MoviesList;

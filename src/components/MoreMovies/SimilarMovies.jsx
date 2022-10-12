import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";




import tmdbApi from "../../api/tmdb.api";

import MovieCard from "./../Movies/MovieCard";
import "./../Movies/MoviesList.scss";

const SimilarMovies = () => {
  
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdbApi.get(`movie/${id}/similar`);
      setMovies(data.results);
    };
    fetchMovies();
  });

  return (
    <div className="moviesList">
      {movies.map((movie, index) => {
        return <MovieCard key={index} {...movie} />
      })}
    </div>
  );
};

export default SimilarMovies;

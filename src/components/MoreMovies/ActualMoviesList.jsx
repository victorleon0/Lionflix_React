import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";




import MovieCard from "../Movies/MovieCard";
import "./../Movies/MoviesList.scss";

const ActualMoviesList = () => {
  
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&year=2022");
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

export default ActualMoviesList;

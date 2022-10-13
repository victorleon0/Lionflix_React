import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import { useEffect } from "react";

import tmdbApi from "../../api/tmdb.api";

import MovieCard from "./../Movies/MovieCard";
import "./../Movies/MoviesList.scss";
import "./MoviesPage.scss";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdbApi.get("discover/movie");
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div className="movieDetails">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="movies">
        <h1 className="titleMovie">Discover the latest movies</h1>
        <div className="moviesList">
          {movies.map((movie, index) => {
            return <MovieCard key={index} {...movie} />;
          })}
        </div>
        <div className="backgroundApp">
          <img
            className="backgroundImageApp"
            src="./assets/BG_movies.jpeg"
            alt="backgroundApp"
          ></img>
        </div>
        <div className="footer">
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;

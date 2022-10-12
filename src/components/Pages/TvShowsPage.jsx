import Navbar from "../Navbar/Navbar";
import React, { useState } from "react";
import { useEffect } from "react";



import tmdbApi from "../../api/tmdb.api";

import TvShowsCard from "../Movies/TvShowsCard";
import "./../Movies/MoviesList.scss";
import "./TvShowsPage.scss";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdbApi.get("discover/tv");
      setMovies(data.results);
    };
    fetchMovies();
  }, []);
    
  return (
    <div className="tvDetails">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="movies">
      <h1 className="titleMovie">Discover the best TV Shows</h1>
      <div className="moviesList">
      {movies.map((movie, index) => {
        return <TvShowsCard key={index} {...movie} />
      })}
    </div>
    <h2 className="titleMovie">We also recommend you...</h2>

      </div>
    </div>
  );
};

export default MoviesPage;
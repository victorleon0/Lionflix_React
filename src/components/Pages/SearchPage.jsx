import React from "react";
import { useState, useEffect } from "react";
//import SearchBar from "../Search/SearchBar";
import Navbar from "../Navbar/Navbar";
import MovieCard from "../Movies/MovieCard";
import SearchMovieInput from "../Search/SearchBar"

import axios from "axios";

import tmdbApi from "../../api/tmdb.api";
import MoviesList from "../Movies/MoviesList";
import SearchBar from "../Search/SearchBar";



// import PageSwitch from "../components/PageSwitch";

const SearchPage = () => {

  const [movies, setMovies] = useState([]); // ALL_Movies
  const [moviesToShow, setMoviesToShow] = useState([]);

  const getMoviesToShow = () => {
    const input = document.querySelector('#input-search');

    if(!moviesToShow.length && input.value) {
      return [];
    }

    return moviesToShow;
  }

  useEffect(() => {
    const fetchMovies = async (input) => {
      const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8f781d70654b5a6f2fa69770d1d115a3&query=${input}`);
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  const filter = (results) => {
    setMoviesToShow(results);
  }

  


  return (
    <div className="searchpage"><div className="navbar">
        <Navbar/>
      </div>
      <div id="input-search" className="searchbar">
      <SearchMovieInput movies={movies} filter={filter} />
      </div>
      <div className="container">
      
      <h1>Pokedex</h1>
      <ol id="pokedex">
      {movies.map((movie, index) => {
        return <MovieCard movies={moviesToShow.length ? getMoviesToShow() : movies}  />
      })}
      </ol>
      
    </div>

      </div>
  
    
      
  );
};

export default SearchPage;







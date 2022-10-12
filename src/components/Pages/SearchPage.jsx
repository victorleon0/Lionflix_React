import React from "react";
import { connect } from "react-redux";

import SearchBar from "../Search/SearchBar";
import Navbar from "../Navbar/Navbar";
import MoviesList from "../Movies/MoviesList";



// import PageSwitch from "../components/PageSwitch";

const SearchPage = () => {
  // const [{ data, isLoading }, doFetch] = useMovieData();

  // defaults = [1124, 335984, 1551398,  ["374720", ]

  return (
    <div className="searchpage"><div className="navbar">
        <Navbar/>
      </div>
      <div className="searchbar">
        <SearchBar/>
      </div>
      <div className="movies-container">
        <MoviesList/>
      </div>
      </div>
  
    
      
  );
};

export default SearchPage;







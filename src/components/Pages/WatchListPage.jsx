import React, { useContext } from "react";
import { GlobalContext } from "./../../context/GlobalState";
import MovieCard from "./../Movies/MovieCard";
import Navbar from "../Navbar/Navbar";

//rafc
export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="moviePage">
    <div className="navbar-inner"><Navbar/></div>
      <div className="container">
        <div className="pageHeader">
          <h1>My Watchlist</h1>
          <span className="count">
            {watchlist.length} {watchlist.length == 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movieGrid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type="watchlist"></MovieCard>
            ))}
          </div>
        ) : (
          <h2 className="noMovies">
            No movies in your watchlist, go add some!
          </h2>
        )}
      </div>
      </div>
    
  );
};
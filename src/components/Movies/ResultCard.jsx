import React, { useContext, useNavigate } from "react";
import { GlobalContext } from "../../context/GlobalState";
import MovieDetails from "./MovieDetails";

const getImagePath = (imagepath)=> {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${imagepath}`
}

export const MovieCard = ({ poster_path, title, release_date, id, movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  const navigate = useNavigate ();

  const navigateToMovie = (movie) => {
    navigate(`/movies/${id}`, {state: movie});
  };

  // prevent from adding same movie to watchlist more than once
  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let watchedMovie = watched.find((o) => o.id === movie.id);
  const watchlistDisabled = storedMovie || watchedMovie ? true : false;
  const watchedDisabled = watchedMovie ? true : false;
  // {s.}
  return (
    <div className="movieCard" key={id}>
      <img className="imageCard" src={getImagePath(poster_path)} alt={title} onClick={() => navigateToMovie(<MovieDetails/>)}></img>
      <div className="textCard">
        <h3 className="title">{title}</h3>
        <p className="date">{release_date}</p>
      </div>
      <div className="buttons">
          <button
            className="watch"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>

          <button
            className="watched"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
      
    
   

        
  );
};
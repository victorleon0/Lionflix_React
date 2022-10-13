import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./MovieDetails.scss";
import SimilarMovies from "../MoreMovies/SimilarMovies";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";

const MovieDetails = ({ poster_path, backdrop_path, type }) => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const getMovie = async () => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8f781d70654b5a6f2fa69770d1d115a3`
    );
    setMovie(res.data);
  };

  const getImagePath = (poster_path) => {
    return `https://www.themoviedb.org/t/p/original${poster_path}`;
  };

  const getBackdropPath = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/original${backdrop_path}`;
  };

  useEffect(() => {
    getMovie();
  });

  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="movieDetails">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="details">
        {movie && (
          <>
            <div id="results">
              <div id="movie">
                <div className="movie-details-container">
                  <div className="column column-md">
                    <img
                      src={getImagePath(movie.poster_path)}
                      alt={movie.title}
                      id="poster"
                    ></img>
                  </div>
                  <div className="column column-md">
                    <h1 id="title">
                      {movie.title}
                      <span id="date"> {movie.release_date}</span>
                    </h1>
                    <div className="watchlist">
                    <div className="innerCardControls">
                    <button
            className="buttonadd"
            onClick={() => {
              addMovieToWatched(movie);
            }}
          >
            <FaEye />
          </button>
          <button
            className="buttonremove"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <BiTrash />
          </button>
      

      {type === "watched" && (
        <>
          <button
            className="buttonmove"
            onClick={() => {
              moveToWatchlist(movie);
            }}
          >
            <FaEyeSlash />
          </button>
          <button
            className="buttonremove"
            onClick={() => removeFromWatched(movie.id)}
          >
            <BiTrash />
          </button>
        </>
      )}
    </div>
                    </div>
                    <div className="row">
                      <span className="badge">
                        <span id="status">{movie.status}</span>
                      </span>
                    </div>
                    <div className="row">
                      {movie.runtime} minutes | {movie.release_date}
                    </div>
                    <h3 id="tagline">{movie.tagline}</h3>
                    <div id="overview">
                      <p id="synopsis">{movie.overview}</p>
                    </div>
                    <div className="row">
                      <div className="column column-md">
                        <div className="ratings">
                          <h2>Rating</h2>
                          <span id="rating">{movie.vote_average}/10</span>
                        </div>
                      </div>
                      <div className="column column-md">
                        <h2>Runtime</h2>
                        <div>
                          <div id="runtime">{movie.runtime} minutes</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="similarMovies">
              <h1>Similar Movies</h1>
              <SimilarMovies />
            </div>
            
              <img
                className="backgroundImageOriginal"
                src={getBackdropPath(movie.backdrop_path)}
                alt={movie.title}
                id="poster"
              ></img>
            
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;

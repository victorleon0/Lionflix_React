import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./MovieDetails.scss";
import { Link } from "react-router-dom";

const MovieDetails = ({ poster_path }) => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const getMovie = async () => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8f781d70654b5a6f2fa69770d1d115a3`
    );
    setMovie(res.data);
  };

  const getImagePath = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`;
  };

  useEffect(() => {
    getMovie();
  });

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
                <div class="movie-details-container">
                  <div class="column column-md">
                    <img
                      src={getImagePath(movie.poster_path)}
                      alt={movie.title}
                      id="poster"
                    ></img>
                  </div>
                  <div class="column column-md">
                    <h1 id="title">
                      {movie.title}
                      <span id="date"> {movie.release_date}</span>
                    </h1>
                    <div className="divicons">
                          <Link to="/favorites">
                            <img
                              src="https://images.emojiterra.com/google/android-oreo/512px/2764.png"
                              className="heart"
                              alt="favorites"
                            ></img>
                          </Link>
                          <Link to="/saved">
                            <img
                              src="https://cdn141.picsart.com/328471124051211.png"
                              className="save"
                              alt="saved"
                            ></img>
                          </Link>
                        </div>
                    <div class="row">
                      <span class="badge">
                        <span id="status">{movie.status}</span>
                      </span>
                    </div>
                    <div class="row">
                      {movie.runtime} minutes | {movie.genres.name} |{" "}
                      {movie.release_date}
                    </div>
                    <h3 id="tagline">{movie.tagline}</h3>
                    <div id="overview">
                      <p id="synopsis">{movie.overview}</p>
                    </div>
                    <div class="row">
                      <div class="column column-md">
                        <div class="ratings">
                          <h2>Rating</h2>
                          <span id="rating">{movie.vote_average}/10</span>
                        </div>
                      </div>
                      <div class="column column-md">
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
          </>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import './MovieDetails.scss';




const MovieDetails = ({poster_path}) => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  const getMovie = async () => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8f781d70654b5a6f2fa69770d1d115a3`
    );
    setMovie(res.data);
  };

  const getImagePath = (poster_path)=> {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${poster_path}`
}

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
          <img src={getImagePath(movie.poster_path)} alt={movie.title} id="poster"></img>
          </div>
          <div class="column column-md">
            <h1 id="title">{movie.title}<span id="date"> (1988)</span></h1>
            <div class="row">
              <span class="badge"><span id="status">Released</span>
              </span>
            </div>
            <div class="row">
              1 hour 26 minutes | Fantasy, Animation, Family | 16 April 1988
            </div>
            <h3 id="tagline">These strange creatures still exist in Japan. Probably.</h3>
            <div id="overview">
              <p id="synopsis">Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the
                older sister seeks help from the spirits to find her.</p>
            </div>
            <div class="row">
              <h2>Company Credits</h2>
              <div id="companies">Studio Ghibli, Nibariki, Tokuma Japan Communications Co. Ltd.</div>
            </div>
            <div class="row">
              <h2>Countries</h2>
              <div id="countries">Japan</div>
            </div>
            <div class="row">
              <h2>Box Office</h2>
              <div id="budget"><strong>Budget:</strong> $0</div>
              <div id="revenue"><strong>Revenue:</strong> $0</div>
            </div>
            <div class="row">
              <div class="column column-md">
                <div class="ratings">
                  <h2>Rating</h2>
                  <span id="rating">8/10</span>
                </div>
              </div>
              <div class="column column-md">
                <h2>Runtime</h2>
                <div>
                  <div id="runtime">86 minutes</div>
                </div>
              </div>
              <div class="column column-lg">
                <h2>Related</h2>
                <ul id="related">

                </ul>
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

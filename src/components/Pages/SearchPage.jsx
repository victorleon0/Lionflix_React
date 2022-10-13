import { useEffect, useState } from "react";
import "./SearchPage.scss";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import MoviesList from "../Movies/MoviesList";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const SearchPage = () => {
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const SEARCH_API = MOVIE_API + "search/movie";
  const DISCOVER_API = MOVIE_API + "discover/movie";
  const API_KEY = "8f781d70654b5a6f2fa69770d1d115a3";
  const BACKDROP_PATH = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [movie, setMovie] = useState({ title: "Loading Movies" });

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const { data } = await axios.get(
      `${searchKey ? SEARCH_API : DISCOVER_API}`,
      {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      }
    );

    setMovies(data.results);
    setMovie(data.results[0]);

    if (data.results.length) {
      await fetchMovie(data.results[0].id);
    }
  };

  const fetchMovie = async (id) => {
    const { data } = await axios.get(`${MOVIE_API}movie/${id}`, {
      params: {
        api_key: API_KEY,
      },
    });

    setMovie(data);
  };

  const selectMovie = (movie) => {
    fetchMovie(movie.id);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  const getImagePath = (poster_path) => {
    return `https://www.themoviedb.org/t/p/original${poster_path}`;
  };

  const getBackdropPath = (backdrop_path) => {
    return `https://www.themoviedb.org/t/p/original${backdrop_path}`;
  };

  const renderMovies = () =>
    movies.map((movie) => (
      <MoviesList selectMovie={selectMovie} key={movie.id} movie={movie} />
    ));

  return (
    <div className="SearchPage">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="search">
        <form className="form" onSubmit={fetchMovies}>
          <input
            className="search"
            type="text"
            id="search"
            placeholder="Write your movie and press enter..."
            onInput={(event) => setSearchKey(event.target.value)}
          />
        </form>
      </div>
      {movies.length ? (
        <main background-color="#303030">
          {movie ? (
            <div className="poster">
              <div className="center-max-size">
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
                              <div className="divicons">
                                <Link to="/favorites">
                                  <img
                                    src="https://images.emojiterra.com/google/android-oreo/512px/2764.png"
                                    className="heart"
                                    alt="favorites"
                                  ></img>
                                </Link>
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
                                    <span id="rating">
                                      {movie.vote_average}/10
                                    </span>
                                  </div>
                                </div>
                                <div className="column column-md">
                                  <h2>Runtime</h2>
                                  <div>
                                    <div id="runtime">
                                      {movie.runtime} minutes
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="similarMovies">
                        <h1>Similar Movies</h1>
                        <MoviesList />
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
            </div>
          ) : <div className="null"></div>}
        </main>
      ) : (
        "Sorry, no movies found"
      )}
      <div className="footer">
          <Footer/>
        </div>
    </div>
  );
};

export default SearchPage;

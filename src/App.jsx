import "./App.scss";
import Banner from "./components/Banner/Banner";
import MoviesList from "./components/Movies/MoviesList";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ActualMoviesList from "./components/MoreMovies/ActualMoviesList";
import SpanishMoviesList from "./components/MoreMovies/SpanishMoviesList";
import TopRatedList from "./components/MoreMovies/TopRatedList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="navigator">
          <Navbar />
        </div>
        <div className="banner">
          <Banner />
        </div>
        <div className="filter">
        </div>
        <div className="movieContainer">
          <h1 className="categorie">Trending Now</h1>
          <MoviesList/>
          <h1 className="categorie">Spanish Movies</h1>
          <SpanishMoviesList/>
          <h1 className="categorie">Top Rated</h1>
          <TopRatedList/>
          <h1 className="categorie">2022 Movies</h1>
          <ActualMoviesList/>
          
        </div>
        <div className="backgroundApp">
        <img
                className="backgroundImageApp"
                src="./assets/BG_movies.jpeg"
                alt="backgroundApp"
              ></img></div>
        <div className="footer">
          <Footer/>
        </div>
        
      </div>
    </div>
  );
}

export default App;

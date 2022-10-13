import "./App.scss";
import Banner from "./components/Banner/Banner";
import MoviesList from "./components/Movies/MoviesList";

import Navbar from "./components/Navbar/Navbar";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Footer from "./components/Footer/Footer";
import AddFavorites from "./components/Favorites/AddFavorites";

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
          <MoviesList FavouriteComponent={AddFavorites}/>
          <h1 className="categorie">Trending Now</h1>
          <MoviesList/>
          <h1 className="categorie">Trending Now</h1>
          <MoviesList/>
          <h1 className="categorie">Trending Now</h1>
          <MoviesList/>
          <h1 className="categorie">Trending Now</h1>
          <MoviesList/>
        </div>
        
        <div className="footer">
          <SocialMedia/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;

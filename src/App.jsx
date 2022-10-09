import "./App.scss";
import Banner from "./components/Banner/Banner";
import MoviesList from "./components/Movies/MoviesList";

import Navbar from "./components/Navbar/Navbar";

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
        <div className="filter"></div>
        <div className="movieContainer">
          <MoviesList/>
        </div>
        <img
          className="backroundImage"
          src="https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1.jpg"
          alt="Backround"
        ></img>
        <div className="buscadorHome"></div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default App;

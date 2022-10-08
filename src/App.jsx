import "./App.scss";
//Import Navigation from "./components/Navigation/Navigation.jsx";
//import Footer from "./components/Footer/Footer.jsx";
//import Searchbar from "./components/Searchbar/Searchbar";

function App() {
  return (
    <div className="App">
      <div className="navigator">
        
      </div>
      <div className="hero-container">
        <h1 className="title">Todas las películas y series que desees, y mucho más.</h1>
        <h3 className="subtitle">Utiliza el buscador y descubre lo que podemos ofrecerte</h3>
      </div>
      <img
        className="backgroundImage"
        src="../assets/BG_movies.jpeg"
        alt="Background"
      ></img>
      <div className="searchbar">
      </div>
      <div className="footer">
      </div>
    </div>
  );
}

export default App;


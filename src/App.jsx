import "./App.scss";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="navigator">
        <Navbar/>
      </div>
      <div className="banner">
      


      </div>
      <div className="hero-container">
        <h1 className="title">Todas las películas y series que deseas el cine que necesitas en la ciudad que elijas</h1>
        <h3 className="subtitle">Utiliza el buscador y descubre lo que podemos ofrecerte</h3>
      </div>
      <img
        className="backroundImage"
        src="https://genotipia.com/wp-content/uploads/2020/04/Netflix-Background-prueba-1.jpg"
        alt="Backround"
      ></img>
      <div className="buscadorHome">
      </div>
      <div className="footer">
      </div>
    </div>
  );
}

export default App;
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";

import MovieDetails from "./components/Movies/MovieDetails";
import SearchPage from "./components/Pages/SearchPage";
import MoviesPage from "./components/Pages/MoviesPage";
import TvShowsPage from "./components/Pages/TvShowsPage";
import TvShowsDetails from "./components/Movies/TvShowsDetails";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TvShowsDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/films" element={<MoviesPage />} />
        <Route path="/tvshows" element={<TvShowsPage />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

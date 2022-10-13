import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";




import {GlobalProvider} from "./context/GlobalState";

import MovieDetails from "./components/Movies/MovieDetails";
import SearchPage from "./components/Pages/SearchPage";
import MoviesPage from "./components/Pages/MoviesPage";
import TvShowsPage from "./components/Pages/TvShowsPage";
import TvShowsDetails from "./components/Movies/TvShowsDetails";
import UpcomingMoviesPage from "./components/Pages/UpcomingMoviesPage";
import ContactPage from "./components/Pages/ContactPage";
import { Watchlist } from "./components/Pages/WatchListPage";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <GlobalProvider>
  <Router>
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TvShowsDetails />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/films" element={<MoviesPage />} />
        <Route path="/tvshows" element={<TvShowsPage />} />
        <Route path="/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/favorites" element={<Watchlist />} />
      </Routes>
    </React.StrictMode>
  </Router>
  </GlobalProvider>,
);

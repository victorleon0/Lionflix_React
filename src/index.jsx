import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App";

import MovieDetails from "./components/Movies/MovieDetails";
import SearchPage from "./components/Search/SearchPage";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

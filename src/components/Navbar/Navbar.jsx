import "./Navbar.scss";
import React from "react";
import { Link } from "react-router-dom";

import bannerLogo from './../../assets/LIONFLIX.png';


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="divlogo">
        <Link to="/">
          <img
            src={bannerLogo}
            className="logo"
            alt="logo"
          ></img>
        </Link>
      </div>
      <div className="divnavbar">
      <Link to="/search">
          <button className="navButton">Search</button>
        </Link>
        <Link to="/films">
          <button className="navButton">Films</button>
        </Link>
        <Link to="/tvshows">
          <button className="navButton">TV Shows</button>
        </Link>
        <Link to="/upcoming">
          <button className="navButton">Upcoming</button>
        </Link>
        <Link to="/favorites">
          <button className="navButton">Favorites</button>
        </Link>
        <Link to="/contact">
          <button className="navButton">Contact</button>
        </Link>
      </div>
      <div className="divicons">
        <Link to="/favorites">
          <img
            src="https://images.emojiterra.com/google/android-oreo/512px/2764.png"
            className="heart"
            alt="favorites"
          ></img>
        </Link>
        <Link to="/saved">
          <img
            src="https://cdn141.picsart.com/328471124051211.png"
            className="save"
            alt="saved"
          ></img>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

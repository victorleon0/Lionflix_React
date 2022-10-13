import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BiTrash } from "react-icons/bi";


export const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="innerCardControls">
      {type === "watchlist" && (
        <>
          <button
            className="buttonadd"
            onClick={() => {
              addMovieToWatched(movie);
            }}
          >
            <FaEye />
          </button>
          <button
            className="buttonremove"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <BiTrash />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="buttonmove"
            onClick={() => {
              moveToWatchlist(movie);
            }}
          >
            <FaEyeSlash />
          </button>
          <button
            className="buttonremove"
            onClick={() => removeFromWatched(movie.id)}
          >
            <BiTrash />
          </button>
        </>
      )}
    </div>
  );
};
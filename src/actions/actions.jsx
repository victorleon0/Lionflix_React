import {ADDED_FAVORITE,
    FETCH_MOVIES_INITIATED,
    FETCH_MOVIES_FAILED,
    FETCH_MOVIES_SUCCEEDED,
    SEARCH_QUERY_SUBMITTED,REMOVED_FAVORITE} from "./types";  

    import tmdbApi from "../api/tmdb.api";
  
  export const addFavorite = (movie) => (dispatch, getState) => {
    console.log(movie)
    const { favoritesList } = getState().favorites;
  
    if (favoritesList.length === 0) {
      // initial fav added, and saved to localstorage.
      localStorage.setItem("favorites", JSON.stringify([movie]));
      return dispatch({ type: ADDED_FAVORITE, payload: movie });
    } else if (favoritesList.length > 0) {
      // If multiple favorites exist, handle duplicates. If none, append state and localstorage.
      const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
  
      if (storedFavorites.find((i) => i.id === movie.id)) {
        //TODO: Add notifications for error handling.
        return console.log("match found via find");
      } else {
        localStorage.setItem(
          "favorites",
          JSON.stringify([...storedFavorites, movie])
        );
  
        return dispatch({ type: ADDED_FAVORITE, payload: movie });
      }
    }
  };
  
  export const removeFavorite = (movie) => (dispatch, getState) => {
    const { favoritesList } = getState().favorites;
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
  
    const newFavorites = favoritesList.filter((i) => i.id !== movie.id);
  
    const filteredStoredFavorites = storedFavorites.filter(
      (i) => i.id !== movie.id
    );
  
    localStorage.setItem("favorites", JSON.stringify(filteredStoredFavorites));
  
    dispatch({ type: REMOVED_FAVORITE, payload: newFavorites });
  };


  export const fetchMovies = (url, query = "") => async (dispatch) => {
    if (query) {
      dispatch({ type: SEARCH_QUERY_SUBMITTED, payload: query });
    }
  
    dispatch({ type: FETCH_MOVIES_INITIATED });
  
    try {
      const response = await tmdbApi.get(url);
  
      await Promise.all(
        response.data.results.map(async (movie) => {
          const responseDetails = await tmdbApi.get(
            `https://api.themoviedb.org/3/movie/${movie.id}?api_key=8f781d70654b5a6f2fa69770d1d115a3&language=en-US`
          );
  
          movie.details = responseDetails.data;
        })
      );
  
      dispatch({ type: FETCH_MOVIES_SUCCEEDED, payload: response.data});
    } catch (error) {
      dispatch({ type: FETCH_MOVIES_FAILED });
      console.error("%cData Fetching Error:", "font-size: 18px", error);
    }
  };
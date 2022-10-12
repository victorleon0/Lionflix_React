import {ADDED_FAVORITE, REMOVED_FAVORITE} from "../actions/types";
  

  
  const INITIAL_STATE = {
    favoritesList: localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [],
  };
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ADDED_FAVORITE:
        return {
          ...state,
          favoritesList: [...state.favoritesList, action.payload],
        };
  
      case REMOVED_FAVORITE:
        return {
          ...state,
          favoritesList: action.payload,
        };
  
      default:
        return state;
    }
  }
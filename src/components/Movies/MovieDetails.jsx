import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import tmdbApi from "../../api/tmdb.api";
import getImagePath from "../Movies/MovieCard"



const MovieDetails = ({title, poster_path, date, id }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [movie, setMovie] = useState(location.state);

  return (
    <div className="movieDetails" key={movie.id}>
      <img className="imageCard" src={getImagePath(poster_path)} alt={title} ></img>
      <div>
        ID: {movie.id} - <strong>{movie.title}</strong>
      </div>
      <div>
        Especie: <strong>{movie.details}</strong>
      </div>
      <div>
        Estado: <strong>{movie.status}</strong>
      </div>
      <div>
        {/* <h1 onClick={() => Navigate('/characters')}> */}
        <h1 onClick={() => navigate(-1)}>
          Volver atrás
        </h1>
        <Link to="/">Volver atrás</Link>
      </div>
    </div>
  );
};

export default MovieDetails;

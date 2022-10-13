import "./MovieCard.scss";
import { useNavigate } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import { MovieControls } from "./MovieControls";

const getImagePath = (imagepath)=> {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${imagepath}`
}




const MovieCard = ({ poster_path, title, release_date, id, type, movie}) => {

  const navigate = useNavigate ();

  const navigateToMovie = (movie) => {
    navigate(`/movies/${id}`, {state: movie});
  };

  
  return (
    <div className="movieCard" key={id}>
      <img className="imageCard" src={getImagePath(poster_path)} alt={title} onClick={() => navigateToMovie(<MovieDetails/>)}></img>
      <div className="textCard">
        <h3 className="title">{title}</h3>
        <p className="date">{release_date}</p>
        <MovieControls type={type} movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;

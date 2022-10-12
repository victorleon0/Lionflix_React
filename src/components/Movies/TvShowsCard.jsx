import "./MovieCard.scss";
import { useNavigate } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const getImagePath = (imagepath)=> {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${imagepath}`
}


const TvShowsCard = ({ poster_path, name, number_of_seasons, id }) => {

  const navigate = useNavigate ();

  const navigateToMovie = (movie) => {
    navigate(`/tv/${id}`, {state: movie});
  };

  
  return (
    <div className="movieCard" key={id}>
      <img className="imageCard" src={getImagePath(poster_path)} alt={name} onClick={() => navigateToMovie(<MovieDetails/>)}></img>
      <div className="textCard">
        <h3 className="title">{name}</h3>
        <p className="date">{number_of_seasons} Seasons</p>
      </div>
    </div>
  );
};

export default TvShowsCard;

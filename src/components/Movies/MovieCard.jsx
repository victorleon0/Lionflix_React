import "./MovieCard.scss";

const getImagePath = (imagepath)=> {
    return `https://www.themoviedb.org/t/p/w440_and_h660_face${imagepath}`
}


const MovieCard = ({ poster_path, title, release_date }) => {
  return (
    <div className="movieCard">
      <img className="imageCard" src={getImagePath(poster_path)} alt={title} ></img>
      <div className="textCard">
        <h3 className="title">{title}</h3>
        <p className="date">{release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;

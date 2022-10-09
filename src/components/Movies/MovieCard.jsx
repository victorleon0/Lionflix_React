import "./MovieCard.scss";


const MovieCard = ({ imageURL, title, date }) => {
  return (
    <div className="movieCard">
      <img className="imageCard" src={imageURL} alt={title}></img>
      <div className="textCard">
        <h3 className="title">{title}</h3>
        <p className="date">{date}</p>
      </div>
    </div>
  );
};

export default MovieCard;

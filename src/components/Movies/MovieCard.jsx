const MovieCard = ({movie}) => {
    return (
      <li className="card" key={movie.title}>
        <img src={movie.image} alt={movie.title} />
        <p className="card-title">{movie.title}</p>
        <div className="card-subtitle">
          {movie.type[0]} {movie.type[1] ? `, ${movie.type[1]}` : ""}
        </div>
      </li>
    );
  };
  
  export default MovieCard;
  
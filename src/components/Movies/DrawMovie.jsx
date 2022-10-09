import MovieCard from "./MovieCard";

const DrawMovies = ({movies}) => {
  return movies.map(movie => <MovieCard key={movie.title} movie={movie} />);
};

export default DrawMovies;

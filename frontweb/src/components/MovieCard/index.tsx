import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="list-movies-container bg-secondary">
      <div className="image-container ">
        <img src={movie.imgUrl} alt="Imagem Filme" />
      </div>
      <div className="movie-content-container">
        <h1>{movie.title}</h1>
        <h2>{movie.year}</h2>
        <p>{movie.synopsis}</p>
      </div>
    </div>
  );
};

export default MovieCard;

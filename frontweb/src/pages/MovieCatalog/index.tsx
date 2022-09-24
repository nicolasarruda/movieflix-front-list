import { Link } from 'react-router-dom';
import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="list-movies-container">
      <h1>Tela listagem de filmes</h1>
      <Link to="movies/1/reviews" className="text-link">
        <p>Acessar /movies/1</p>
      </Link>
      <Link to="movies/2/reviews" className="text-link">
        <p>Acessar /movies/2</p>
      </Link>
    </div>
  );
};

export default MovieCatalog;

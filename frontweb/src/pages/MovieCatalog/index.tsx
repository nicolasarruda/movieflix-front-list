import MovieFilter from 'components/MovieFilter';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { requestBackEnd } from 'utils/requests';
import MovieCard from '../../components/MovieCard';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { Movie } from 'types/movie';

const MovieCatalog = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
    };

    requestBackEnd(config).then((response) => {
      setMovies(response.data.content);
    });
  });

  return (
    <div className="list-filter-container">
      <MovieFilter />

      {movies.map((movie) => {
        return (
          <Link
            key={movie.id}
            to={`movies/${movie.id}/reviews`}
            className="text-link"
          >
            <MovieCard movie={movie} />
          </Link>
        );
      })}

      <Pagination />
    </div>
  );
};

export default MovieCatalog;

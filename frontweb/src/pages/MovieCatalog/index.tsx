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
      <div className="row">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="col-sm-6 col-xl-3">
              <Link to={`movies/${movie.id}/reviews`} className="text-link">
                <MovieCard movie={movie} />
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination />
    </div>
  );
};

export default MovieCatalog;

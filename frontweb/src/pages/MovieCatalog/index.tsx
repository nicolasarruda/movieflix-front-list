import MovieFilter, { MovieFilterData } from 'components/MovieFilter';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { requestBackEnd } from 'utils/requests';
import MovieCard from '../../components/MovieCard';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { Movie } from 'types/movie';

type ControlComponentsData = {
  filterData: MovieFilterData;
};

const MovieCatalog = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      filterData: { genre: null },
    });

  const getMovies = () => {};

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        genreId: controlComponentsData.filterData.genre?.id,
      },
    };

    requestBackEnd(config).then((response) => {
      const content = response.data.content;
      setMovies(content);
    });
  }, [controlComponentsData]);

  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({ filterData: data });
  };

  return (
    <div className="list-filter-container">
      <MovieFilter onSubmitFilter={handleSubmitFilter} />
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
      <Pagination pageCount={5} range={3} onChange={getMovies} />
    </div>
  );
};

export default MovieCatalog;

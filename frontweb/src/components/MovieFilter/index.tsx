import { ReactComponent as ClearIcon } from './../../assets/images/clear-icon.svg';
import { ReactComponent as ArrowIcon } from './../../assets/images/arrow-icon.svg';
import './styles.css';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { useState, useEffect } from 'react';
import { Genre } from 'types/genre';
import { requestBackEnd } from 'utils/requests';

export type MovieFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: MovieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<MovieFilterData>();

  const onSubmit = (formData: MovieFilterData) => {
    console.log('ENVIOU', formData);
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);

    const obj = {
      genre: getValues('genre'),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackEnd({ url: '/genres', withCredentials: true })
      .then((response) => {
        setSelectGenres(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="filter-container bg-secondary">
      <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-form">
        <div className="movie-filter-category-container">
          <Controller
            name="genre"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectGenres}
                classNamePrefix="movie-genre-select"
                isMulti
                placeholder="Gênero"
                // onChange={(value) => handleChangeGenre(value as Genre)}
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => String(genre.id)}
              />
            )}
          />
        </div>
        {/* <div className="movie-buttons-container">
          <button className="btn-movie-clear-button bg-secondary">
            <ClearIcon />
          </button>
          <button className="btn-movie-filter-button bg-secondary">
            <ArrowIcon />
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default MovieFilter;

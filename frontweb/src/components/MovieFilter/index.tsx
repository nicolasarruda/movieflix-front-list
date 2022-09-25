import { ReactComponent as ClearIcon } from './../../assets/images/clear-icon.svg';
import { ReactComponent as ArrowIcon } from './../../assets/images/arrow-icon.svg';
import './styles.css';

const MovieFilter = () => {
  return (
    <div className="filter-container bg-secondary">
      <form action="" className="movie-filter-form">
        <div className="movie-filter-category-container">
          <h1>Aventura</h1>
        </div>
        <div className="movie-buttons-container">
          <button className="btn-movie-clear-button bg-secondary">
            <ClearIcon />
          </button>
          <button className="btn-movie-filter-button bg-secondary">
            <ArrowIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieFilter;

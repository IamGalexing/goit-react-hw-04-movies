import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import noImage from '../../images/no-poster-image.jpg';
import styles from './moviesList.module.css';

const MoviesList = ({ list, location }) => {
  const isPoster = poster => {
    return poster ? `https://image.tmdb.org/t/p/w300${poster}` : noImage;
  };

  return (
    <ul className={styles.moviesList}>
      {list.map(({ title, id, poster_path }) => {
        return (
          <li key={id} className={styles.moviesListItem}>
            <Link
              to={{
                pathname: `movies/${id}`,
                state: {
                  from: location.pathname,
                },
              }}
              className={styles.moviesListLink}
            >
              <img
                className={styles.moviesListItemImage}
                src={isPoster(poster_path)}
                alt={`movie poster ${title}`}
              />
              <h3 className={styles.moviesListItemTitle}>{title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
    }),
  ),
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesList);

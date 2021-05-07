import PropTypes from 'prop-types';
import styles from './movieCard.module.css';
import noImage from '../../../images/no-poster-image.jpg';

const MovieCard = ({ details }) => {
  const {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  } = details;
  const releaseYear = release_date.split('-')[0];
  const usersScore = vote_average ? vote_average * 10 : 'N/A';
  const genresString = genres.map(item => item.name).join(', ');
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w300${poster_path}`
    : noImage;

  return (
    <div className={styles.movieCard}>
      <img className={styles.movieCardImage} src={poster} alt="movie poster" />
      <div className={styles.movieCardDescription}>
        <h1 className={styles.movieCardTitle}>
          {title} ({releaseYear})
        </h1>
        <p className={styles.movieCardText}>User`s score: {usersScore}%</p>
        <h2 className={styles.movieCardSectionTitle}>Overview</h2>
        <p className={styles.movieCardText}>{overview}</p>
        <h2 className={styles.movieCardSectionTitle}>Genres</h2>
        <p className={styles.movieCardText}>{genresString}</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  details: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      }),
    ),
  }),
};

export default MovieCard;

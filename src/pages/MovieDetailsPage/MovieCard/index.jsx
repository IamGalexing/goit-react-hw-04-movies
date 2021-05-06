import styles from './movieCard.module.css';

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
  const usersScore = vote_average * 10;
  const genresString = genres.map(item => item.name).join(', ');

  return (
    <div className={styles.movieCard}>
      <img
        className={styles.movieCardImage}
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt=""
      />
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

export default MovieCard;

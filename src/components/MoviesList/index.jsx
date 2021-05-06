import { Link, withRouter } from 'react-router-dom';
import noImage from '../../images/no-poster-image.jpg';
import styles from './moviesList.module.css';

const MoviesList = ({ list, location }) => {
  return (
    <ul className={styles.moviesList}>
      {list.map(({ title, id, poster_path }) => {
        const imageURL = poster_path
          ? `https://image.tmdb.org/t/p/w300${poster_path}`
          : noImage;
        return (
          <li key={id}>
            <Link
              to={{
                // pathname: `${match.url}/${id}`,
                pathname: `movies/${id}`,
                state: {
                  from: location.pathname,
                },
              }}
              className={styles.moviesListItem}
            >
              <img
                className={styles.moviesListItemImage}
                src={imageURL}
                alt=""
              />
              <h3 className={styles.moviesListItemTitle}>{title}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

// MoviesList.defaultProps = {
//   list: {
//     poster_path: noImage,
//   },
// };

export default withRouter(MoviesList);

import styles from './cast.module.css';
import noImage from '../../../images/no-profile-image.jpg';

const Cast = ({ casts = [] }) => {
  return (
    <ul className={styles.castsList}>
      {casts.map(({ cast_id, name, profile_path }) => {
        const imageURL = profile_path
          ? `https://image.tmdb.org/t/p/w200${profile_path}`
          : noImage;
        return (
          <li key={cast_id} className={styles.castCard}>
            <img
              src={imageURL}
              alt={`profile ${name}`}
              className={styles.castCardImage}
            />
            <h3 className={styles.castCardName}>{name}</h3>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;

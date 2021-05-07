import PropTypes from 'prop-types';
import styles from './cast.module.css';
import noImage from '../../../images/no-profile-image.jpg';

const Cast = ({ casts = [] }) => {
  const isProfileImage = profile =>
    profile ? `https://image.tmdb.org/t/p/w200${profile}` : noImage;

  return (
    <ul className={styles.castsList}>
      {casts.map(({ cast_id, name, profile_path }) => (
        <li key={cast_id} className={styles.castCard}>
          <img
            src={isProfileImage(profile_path)}
            alt={`profile ${name}`}
            className={styles.castCardImage}
          />
          <h3 className={styles.castCardName}>{name}</h3>
        </li>
      ))}
    </ul>
  );
};

Cast.propTypes = {
  casts: PropTypes.arrayOf(
    PropTypes.shape({
      cast_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }),
  ),
};

export default Cast;

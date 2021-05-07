import styles from './reviews.module.css';
import PropTypes from 'prop-types';

const Reviews = ({ reviews = [] }) => {
  return reviews.length ? (
    <ul className={styles.reviewsList}>
      {reviews.map(({ id, content, author }) => (
        <li key={id} className={styles.reviewsItem}>
          <h3 className={styles.reviewsTitle}>{author}</h3>
          <p className={styles.reviewsText}>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className={styles.noReviews}>No reviews yet</p>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ),
};

export default Reviews;

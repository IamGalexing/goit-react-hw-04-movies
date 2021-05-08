import styles from './backButton.module.css';
import PropTypes from 'prop-types';

const BackButton = ({ onBackBtnClick }) => {
  return (
    <button className={styles.backBtn} type="button" onClick={onBackBtnClick}>
      <span role="img" aria-label="arrow back">
        ⬅{' '}
      </span>
      Back
    </button>
  );
};

BackButton.propTypes = {
  onBackBtnClick: PropTypes.func.isRequired,
};

export default BackButton;

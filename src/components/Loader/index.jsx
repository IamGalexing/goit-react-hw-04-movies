import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './loader.module.css';

const Loader = ({ loading = true }) => {
  return (
    <div
      className={classNames(styles.containerLoader, {
        [styles.hide]: !loading,
      })}
    >
      <div className={classNames(styles.loader)}></div>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool,
};

export default Loader;

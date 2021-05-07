import classNames from 'classnames';
import styles from './loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={classNames(styles.loader, styles.loader17)}>
        <div className={classNames(styles.cssSquare, styles.square1)}></div>
        <div className={classNames(styles.cssSquare, styles.square2)}></div>
        <div className={classNames(styles.cssSquare, styles.square3)}></div>
        <div className={classNames(styles.cssSquare, styles.square4)}></div>
        <div className={classNames(styles.cssSquare, styles.square5)}></div>
        <div className={classNames(styles.cssSquare, styles.square6)}></div>
        <div className={classNames(styles.cssSquare, styles.square7)}></div>
        <div className={classNames(styles.cssSquare, styles.square8)}></div>
      </div>
    </div>
  );
};

export default Loader;

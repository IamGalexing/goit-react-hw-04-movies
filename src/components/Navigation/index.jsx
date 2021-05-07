import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarList}>
        <li className={styles.navBarItem}>
          <NavLink
            exact
            to={routes.home}
            className={styles.navBarLink}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.navBarItem}>
          <NavLink
            to={routes.movies}
            className={styles.navBarLink}
            activeClassName={styles.active}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

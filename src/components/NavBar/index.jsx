import { NavLink } from 'react-router-dom';
import styles from './navBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.navBarList}>
        <li>
          <NavLink
            exact
            to="/"
            className={styles.navBarLink}
            activeClassName={styles.active}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
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

export default NavBar;

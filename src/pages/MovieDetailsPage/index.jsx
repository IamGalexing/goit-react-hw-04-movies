import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import MovieCard from './MovieCard';
import Cast from './Cast';
import Reviews from './Reviews';
import * as getMovies from '../../sources/fetchMovies';
import routes from '../../routes';
import styles from './movieDetailsPage.module.css';

class MovieDetailsPage extends Component {
  state = {
    details: {},
  };

  componentDidMount() {
    getMovies
      .details(this.props.match.params.movieID)
      .then(({ data }) => {
        this.setState({ details: data });
      })
      .catch(err => new Error(err));
  }

  onBackBtnClick = () => {
    const { history, location } = this.props;
    history.push(location?.state?.from || routes.movies);
  };

  render() {
    const { details } = this.state;
    const { match } = this.props;
    const isData = !!Object.keys(details).length;

    return (
      <>
        {isData && (
          <div>
            <button
              className={styles.backBtn}
              type="button"
              onClick={this.onBackBtnClick}
            >
              Go back
            </button>
            <MovieCard details={details} />
            <div className={styles.movieDetailsSearch}>
              <NavLink
                to={`${match.url}/reviews`}
                className={styles.btnDetails}
                activeClassName={styles.active}
              >
                <span>Reviews</span>
              </NavLink>
              <NavLink
                to={`${match.url}/cast`}
                className={styles.btnDetails}
                activeClassName={styles.active}
              >
                <span>Cast</span>
              </NavLink>
            </div>
          </div>
        )}

        <Route
          path={routes.movieDetailsCast}
          render={() => <Cast casts={details?.credits?.cast} />}
        />
        <Route
          path={routes.movieDetailsReviews}
          render={() => <Reviews reviews={details?.reviews?.results} />}
        />
      </>
    );
  }
}
export default MovieDetailsPage;

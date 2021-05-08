import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import BackButton from '../components/BackButton';
import getMovies from '../sources/fetchMovies';
import routes from '../routes';

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
            <BackButton onBackBtnClick={this.onBackBtnClick} />
            <MovieCard details={details} />
            <div className="movieDetailsSearch">
              <NavLink
                to={`${match.url}/reviews`}
                className="btnDetails"
                activeClassName="active"
              >
                <span>Reviews</span>
              </NavLink>
              <NavLink
                to={`${match.url}/cast`}
                className="btnDetails"
                activeClassName="active"
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

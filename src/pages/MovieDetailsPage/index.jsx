import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import MovieCard from './MovieCard';
import Cast from './Cast';
import Reviews from './Reviews';
import * as getMovies from '../../sources/fetchMovies';
import routes from '../../routes';

class MovieDetailsPage extends Component {
  state = {
    details: {},
  };

  componentDidMount() {
    getMovies
      .details(this.props.match.params.movieID)
      .then(({ data }) => {
        console.log(data);
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
            <button type="button" onClick={this.onBackBtnClick}>
              Go back
            </button>
            <MovieCard details={details} />
            <div>
              <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
              <NavLink to={`${match.url}/cast`}>Cast</NavLink>
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

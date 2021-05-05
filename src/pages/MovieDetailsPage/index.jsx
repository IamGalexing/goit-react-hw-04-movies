import { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import MovieCard from '../../components/movieCard';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
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

  render() {
    const { details } = this.state;
    const { match } = this.props;
    const isData = !!Object.keys(details).length;

    return (
      <>
        {isData && (
          <div>
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

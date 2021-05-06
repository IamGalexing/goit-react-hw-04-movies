import { Component } from 'react';
import MoviesList from '../../components/MoviesList';
import * as getMovies from '../../sources/fetchMovies';
// import styles from './homePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    getMovies
      .tranding()
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .catch(err => new Error(err));
  }

  render() {
    return <MoviesList list={this.state.movies} />;
  }
}

export default HomePage;

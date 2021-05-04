import { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovies } from '../../sources/fetchMovies';
// import styles from './homePage.module.css';

class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    getMovies()
      .then(({ data }) => {
        this.setState({ movies: data.results });
      })
      .catch(err => new Error(err));
  }

  render() {
    return (
      <ul>
        {this.state.movies.map(({ title, id }) => (
          <li key={id}>
            <Link to="movies/:id">{title}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default HomePage;

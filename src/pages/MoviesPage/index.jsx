import { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import * as getMovies from '../../sources/fetchMovies';
import styles from './moviesPage.module.css';

class MoviesPage extends Component {
  state = {
    moviesSearchResult: [],
  };

  onSubmit = inputValue => {
    getMovies
      .search(inputValue)
      .then(({ data }) => {
        this.setState({ moviesSearchResult: data.results });
      })
      .catch(err => new Error(err));
  };

  render() {
    return (
      <>
        <SearchBar handleSubmit={this.onSubmit} />
        <ul className={styles.moviesList}>
          {this.state.moviesSearchResult.map(({ title, id, poster_path }) => (
            <li key={id}>
              <Link
                to={`${this.props.match.url}/${id}`}
                className={styles.moviesListItem}
              >
                <img
                  className={styles.moviesListItemImage}
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt=""
                />
                <h3 className={styles.moviesListItemTitle}>{title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;

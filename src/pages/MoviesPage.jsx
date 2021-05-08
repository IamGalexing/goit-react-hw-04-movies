import { Component } from 'react';
import MoviesList from '../components/MoviesList';
import SearchBar from '../components/SearchBar';
import getMovies from '../sources/fetchMovies';

class MoviesPage extends Component {
  state = {
    moviesSearchResult: [],
  };

  componentDidMount() {
    const moviesStored = sessionStorage.getItem('moviesSearched');
    const moviesResultStored = JSON.parse(moviesStored);

    if (moviesResultStored && moviesResultStored.length) {
      this.setState({
        moviesSearchResult: moviesResultStored,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.moviesSearchResult !== this.state.moviesSearchResult) {
      sessionStorage.setItem(
        'moviesSearched',
        JSON.stringify(this.state.moviesSearchResult),
      );
    }
  }

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
        <MoviesList list={this.state.moviesSearchResult} />
      </>
    );
  }
}

export default MoviesPage;

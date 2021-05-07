import { Component } from 'react';
import styles from './searchBar.module.css';

class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  onChangeInputValue = ({ target }) => {
    this.setState({
      inputValue: target.value.trim(),
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    inputValue.length && this.props.handleSubmit(inputValue);
  };

  render() {
    return (
      <form className={styles.SearchForm} onSubmit={this.onSubmitForm}>
        <input
          onChange={this.onChangeInputValue}
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie by name"
        />
        <button type="submit" className={styles.SearchFormButton}>
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;

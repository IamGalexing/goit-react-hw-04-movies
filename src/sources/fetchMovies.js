import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '4b0d95ff8f4b9ece5adcae3eb8812426';

const getMovies = {
  async tranding() {
    return await axios.get(`/trending/movie/day?api_key=${KEY}`);
  },

  async search(value) {
    return await axios.get(`search/movie?api_key=${KEY}&query=${value}`);
  },

  async details(movie_id) {
    return await axios.get(
      `movie/${movie_id}?api_key=${KEY}&append_to_response=reviews,credits,backdrop_path`,
    );
  },
};

export default getMovies;

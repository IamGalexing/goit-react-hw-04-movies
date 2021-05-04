import axios from 'axios';

const KEY = '4b0d95ff8f4b9ece5adcae3eb8812426';
// const BASE_URL = 'https://api.themoviedb.org/3';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const getMovies = async () => {
  return await axios.get(`/trending/movie/day?api_key=${KEY}`);
};

export { getMovies };

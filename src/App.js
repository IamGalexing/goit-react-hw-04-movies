import { Route, Redirect, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import routes from './routes';

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Redirect to={routes.home} />
      </Switch>
    </>
  );
};

export default App;

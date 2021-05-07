import { lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Loader from './components/Loader';
import routes from './routes';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <MainContainer>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route exact path={routes.movies} component={MoviesPage} />
            <Route path={routes.movieDetails} component={MovieDetailsPage} />
            <Redirect to={routes.home} />
          </Switch>
        </MainContainer>
      </Suspense>
    </>
  );
};

export default App;

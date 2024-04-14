import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { filtersReducer } from "./filtersReducer";
import { MoviesState } from "./moviesReducer";
import { FiltersState } from "./filtersReducer";
import { PageOptionsState } from "./pageOptionsReducer";
import { pageOptionsReducer } from "./pageOptionsReducer";
import {SerchedMovieState} from './searchedMovieNameReducer';
import { searchedMovieNameReducer } from './searchedMovieNameReducer'
import { movieDetailsReducer } from './movieDetailsReducer';
import { MovieDetailsState } from './movieDetailsReducer'

export const rootReducer = combineReducers({
  movies: moviesReducer,
  filters: filtersReducer,
  pageOptions: pageOptionsReducer,
  serchedMovie: searchedMovieNameReducer,
  movieDetails: movieDetailsReducer
});

export interface RootState {
  movies: MoviesState;
  filters: FiltersState;
  pageOptions: PageOptionsState;
  serchedMovie: SerchedMovieState;
  movieDetails: MovieDetailsState
}

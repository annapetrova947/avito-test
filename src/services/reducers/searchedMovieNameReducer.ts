import { UPDATE_SERCHED_MOVIE } from "./../actions/searchedMovieName";

export interface SerchedMovieState {
    name: string,
    searchHistory: string[]
}

const initialState: SerchedMovieState = {
    name: '',
    searchHistory: []
}

interface UpdateSerchedMovieAction {
    type: typeof UPDATE_SERCHED_MOVIE;
    payload: string;
  }

export const searchedMovieNameReducer = (
    state: SerchedMovieState = initialState,
    action: UpdateSerchedMovieAction,
  ): SerchedMovieState => {
    switch (action.type) {
      case UPDATE_SERCHED_MOVIE: {
        return {
          name: action.payload,
          searchHistory: [action.payload, ...state.searchHistory.slice(0, 19)]
        };
      }
      default: {
        return state;
      }
    }
  };
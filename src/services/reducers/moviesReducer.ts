import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  ItemActionTypes,
} from "../actions/movies";

import { Movie } from "../../utils/types";

export interface MoviesState {
  items: Movie[];
  itemsRequest: boolean;
  itemsFailed: boolean;
  totalPages: number
}

const initialState: MoviesState = {
  items: [],
  itemsRequest: false,
  itemsFailed: false,
  totalPages: 0
};

export const moviesReducer = (
  state: MoviesState = initialState,
  action: ItemActionTypes,
): MoviesState => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
      };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        itemsFailed: false,
        items: action.items.docs,
        itemsRequest: false,
        totalPages: action.items.pages
      };
    }
    case GET_ITEMS_FAILED: {
      return { ...state, itemsFailed: true, itemsRequest: false };
    }
    default: {
      return state;
    }
  }
};

import {
    GET_DETAILS_REQUEST,
    GET_DETAILS_SUCCESS,
    GET_DETAILS_FAILED,
    DetailsActionTypes,
  } from "../actions/movieDetails";
  
  import { Movie } from "../../utils/types";
  
  export interface MovieDetailsState {
    item: Movie | {};
    itemsRequest: boolean;
    itemsFailed: boolean;
  }
  
  const initialState: MovieDetailsState = {
    item: {},
    itemsRequest: false,
    itemsFailed: false,
  };
  
  export const movieDetailsReducer = (
    state: MovieDetailsState = initialState,
    action: DetailsActionTypes,
  ): MovieDetailsState => {
    switch (action.type) {
      case GET_DETAILS_REQUEST: {
        return {
          ...state,
          itemsRequest: true,
        };
      }
      case GET_DETAILS_SUCCESS: {
        return {
          ...state,
          itemsFailed: false,
          item: action.item,
          itemsRequest: false,
        };
      }
      case GET_DETAILS_FAILED: {
        return { ...state, itemsFailed: true, itemsRequest: false };
      }
      default: {
        return state;
      }
    }
  };
  
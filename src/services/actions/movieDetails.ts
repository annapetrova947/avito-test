import { Dispatch, Action } from "redux";
import { getMovieDetails } from "../api";
import { Movie } from "../../utils/types.js";

export const GET_DETAILS_REQUEST = "GET_DETAILS_REQUEST";
export const GET_DETAILS_SUCCESS = "GET_DETAILS_SUCCESS";
export const GET_DETAILS_FAILED = "GET_DETAILS_FAILED";

interface GetDetailsRequestAction {
  type: typeof GET_DETAILS_REQUEST;
}

interface GetDetailsSuccessAction {
  type: typeof GET_DETAILS_SUCCESS;
  item: Movie | {};
}

interface GetDetailsFailedAction {
  type: typeof GET_DETAILS_FAILED;
}

export type DetailsActionTypes =
  | GetDetailsRequestAction
  | GetDetailsSuccessAction
  | GetDetailsFailedAction;

export function getDetails(id: number) {
  return function (dispatch: Dispatch<DetailsActionTypes>) {
    dispatch({
      type: GET_DETAILS_REQUEST,
    });
    getMovieDetails(id)
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_DETAILS_SUCCESS,
            item: res
          });
        } else {
          dispatch({
            type: GET_DETAILS_FAILED,
          });
        }
      })
      .catch((e) => dispatch({
        type: GET_DETAILS_FAILED,
      }));
  };
}

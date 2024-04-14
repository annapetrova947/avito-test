import { Dispatch } from "redux";
import { getMovies } from "../api";
import { ApiResponse } from "../../utils/types.js";

export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET_ITEMS_FAILED";

interface GetItemsRequestAction {
  type: typeof GET_ITEMS_REQUEST;
}

interface GetItemsSuccessAction {
  type: typeof GET_ITEMS_SUCCESS;
  items: ApiResponse;
}

interface GetItemsFailedAction {
  type: typeof GET_ITEMS_FAILED;
}

export type ItemActionTypes =
  | GetItemsRequestAction
  | GetItemsSuccessAction
  | GetItemsFailedAction;

export function getItems() {
  return function (dispatch: Dispatch<ItemActionTypes>) {
    dispatch({
      type: GET_ITEMS_REQUEST,
    });
    getMovies()
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_ITEMS_SUCCESS,
            items: res
          });
        } else {
          dispatch({
            type: GET_ITEMS_FAILED,
          });
        }
      })
      .catch((e) => console.log(e));
  };
}

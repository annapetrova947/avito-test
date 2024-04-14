import { UPDATE_FILTERS } from "./../actions/filters";
import {Filters} from './../../utils/types';

interface UpdateFiltersAction {
  type: typeof UPDATE_FILTERS;
  filters: Filters;
}

export interface FiltersState {
  filters: Filters;
}

const initialState: FiltersState = {
  filters: {
    country: "",
    age: "",
    year: "",
  },
};

export const filtersReducer = (
  state: FiltersState = initialState,
  action: UpdateFiltersAction,
): FiltersState => {
  switch (action.type) {
    case UPDATE_FILTERS: {
      return {
        filters: { ...action.filters },
      };
    }
    default: {
      return state;
    }
  }
};

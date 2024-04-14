import { UPDATE_OPTIONS, UPDATE_CURRENT_PAGE, CurrentPage, PageOptions } from "./../actions/pageOptions";

interface UpdatePageOptionsAction {
  type: typeof UPDATE_OPTIONS
  options: PageOptions;
}

interface UpdateCurrentPageAction {
  type: typeof UPDATE_CURRENT_PAGE
  options: CurrentPage;
}

export type PageActionTypes =
  | UpdatePageOptionsAction
  | UpdateCurrentPageAction;

export interface PageOptionsState {
  options: PageOptions | CurrentPage;
}

const initialState: PageOptionsState = {
  options: {
    currentPage: 1,
    itemsPerPage: 10,
  },
};

export const pageOptionsReducer = (
  state: PageOptionsState = initialState,
  action: PageActionTypes,
): PageOptionsState => {
  switch (action.type) {
    case UPDATE_CURRENT_PAGE: {
      return {
        options: { ...state.options, currentPage: action.options.currentPage },
      };
    }

    case UPDATE_OPTIONS: {
      return {
        options: { ...state.options, itemsPerPage: action.options.itemsPerPage },
      };
    }

    
    default: {
      return state;
    }
  }
};

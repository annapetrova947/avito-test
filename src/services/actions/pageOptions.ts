export const UPDATE_OPTIONS = "UPDATE_OPTIONS";
export const UPDATE_CURRENT_PAGE = "UPDATE_CURRENT_PAGE";

export interface PageOptions {
  itemsPerPage: number;
}

export interface CurrentPage {
  currentPage: number;
}

export const updatePageOptions = (options: PageOptions) => ({
  type: UPDATE_OPTIONS,
  options: options,
});


export const updateCurrentPage = (options: CurrentPage) => ({
  type: UPDATE_CURRENT_PAGE,
  options: options,
});

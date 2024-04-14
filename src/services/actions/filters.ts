import {Filters} from './../../utils/types'

export const UPDATE_FILTERS = "UPDATE_FILTERS";

export const updateFilters = (filters: Filters) => ({
  type: UPDATE_FILTERS,
  filters: filters,
});

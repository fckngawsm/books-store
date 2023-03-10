import { ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER } from "./filter-constants";

export const addFilter = (filter) => ({
  type: ADD_FILTER,
  payload: filter,
});

export const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  payload: filter,
});

export const clearFilter = () => ({
  type: CLEAR_FILTER,
});

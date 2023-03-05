import { ADD_FILTER, CLEAR_FILTER, REMOVE_FILTER } from "./filter-constants";

export const filterReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_FILTER: {
      if (state.includes(payload)) {
        return state;
      }
      return [...state, payload];
    }
    case REMOVE_FILTER: {
      return state.filter((filter) => filter !== payload);
    }
    case CLEAR_FILTER: {
      return (state = []);
    }
    default: {
      return state;
    }
  }
};

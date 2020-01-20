import { CHANGE_SORT_COLUMN, CHANGE_SORT_DIRECTION } from "./types";
import { SortAction } from "./../interfaces/action";
import { SortState } from "../interfaces/sort";

const initialState: SortState = {
  sortedColumn: localStorage.getItem("column") || null,
  sortDirection: localStorage.getItem("direction") || null
};

export default function(state = initialState, action: SortAction): SortState {
  switch (action.type) {
    case CHANGE_SORT_COLUMN:
      localStorage.setItem("column", action.payload);
      return {
        ...state,
        sortedColumn: action.payload
      };
    case CHANGE_SORT_DIRECTION:
      localStorage.setItem("direction", action.payload);
      return {
        ...state,
        sortDirection: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

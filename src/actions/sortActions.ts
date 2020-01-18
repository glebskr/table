import { CHANGE_SORT_COLUMN, CHANGE_SORT_DIRECTION, SET_TABLE_CONTENT } from "../reducers/types";
import dynamicSort from "../helperFunctions/sort";

export const changeDirection = (direction: string): Function => (dispatch: Function, getState: Function) => {
  const { sortedColumn } = getState().sort;

  const tableToSort = [...getState().content.tableContent];
  const sortedTable = tableToSort.sort(dynamicSort(sortedColumn, direction));

  dispatch({
    type: CHANGE_SORT_DIRECTION,
    payload: direction
  });
  dispatch({
    type: SET_TABLE_CONTENT,
    payload: sortedTable
  });
};

export const changeColumn = (column: string) => (dispatch: Function, getState: Function) => {
  const { sortDirection } = getState().sort;
  const tableToSort = [...getState().content.tableContent];
  const sortedTable = tableToSort.sort(dynamicSort(column, sortDirection));

  dispatch({
    type: CHANGE_SORT_DIRECTION,
    payload: sortDirection
  });

  dispatch({
    type: CHANGE_SORT_COLUMN,
    payload: column
  });

  dispatch({
    type: SET_TABLE_CONTENT,
    payload: sortedTable
  });
};

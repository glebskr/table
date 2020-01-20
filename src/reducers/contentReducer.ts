import { SET_TABLE_CONTENT } from "./types";
import { ContentState } from "../interfaces/content";
import { ContentAction } from "../interfaces/action";

const initialState: ContentState = {
  tableContent: null
};

export default function(state: ContentState = initialState, action: ContentAction): ContentState {
  switch (action.type) {
    case SET_TABLE_CONTENT:
      return {
        ...state,
        tableContent: action.payload
      };
    default:
      return {
        ...state
      };
  }
}

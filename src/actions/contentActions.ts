import { SET_TABLE_CONTENT } from "../reducers/types";
import { ContentRow } from "../interfaces/content";
import { ContentAction } from "../interfaces/action";

export const setContent = (content: ContentRow[]): ContentAction => {
  return {
    type: SET_TABLE_CONTENT,
    payload: content
  };
};

import { ContentRow } from "../interfaces/content";
import { SortState } from "../interfaces/sort";

export interface ContentAction {
  type: string;
  payload: ContentRow[] ;
}

export interface SortAction {
    type: string;
    payload: string;
}

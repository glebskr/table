import { ContentRow } from "../interfaces/content";

export interface ContentAction {
  type: string;
  payload: ContentRow[];
}

export interface SortAction {
  type: string;
  payload: string;
}

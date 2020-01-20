import { ContentState } from "./content";
import { SortState } from "./sort";

export interface State {
  content: ContentState;
  sort: SortState;
}

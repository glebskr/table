export interface ContentRow {
  [key: string]: string;
}

export interface ContentState {
  tableContent: ContentRow[] | null;
}

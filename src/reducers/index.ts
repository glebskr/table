import { combineReducers } from "redux";

import sortReducer from "./sortReducer";
import contentReducer from "./contentReducer";

export default combineReducers({
  sort: sortReducer,
  content: contentReducer
});

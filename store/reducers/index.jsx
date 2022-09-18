import { combineReducers } from "redux";

import pagesVisibilityReducer from "./pagesVisibilty";

const rootReducer = combineReducers({
	pagesVisibility: pagesVisibilityReducer,
});

export default rootReducer;

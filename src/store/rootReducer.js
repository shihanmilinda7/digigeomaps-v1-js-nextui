import { combineReducers } from "@reduxjs/toolkit";
import mapSelectorReducer from "./map-selector/map-selector-slice";

const rootReducer = combineReducers({
  mapSelectorReducer,
});

export default rootReducer;

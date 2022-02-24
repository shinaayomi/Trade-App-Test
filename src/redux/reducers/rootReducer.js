import { combineReducers } from "@reduxjs/toolkit";
import ngnReducer from "./ngnReducer";
import eurReducer from "./eurReducer";
import gbpReducer from "./gbpReducer";

const rootReducer = combineReducers({
  ngn: ngnReducer,
  eur: eurReducer,
  gbp: gbpReducer,
});

export default rootReducer;
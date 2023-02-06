import changeTheNumber from "./increDecre";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber,
  /// if ther is any other reducers in our project we need to add the reducer like this
  /////   eg . changeThebackgroung   (on button click) we have to first import the reducer on top and then use it like changeTheNumber
});
export default rootReducer;

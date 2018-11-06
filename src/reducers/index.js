import { combineReducers } from "redux";
import shoeReducer, { ShoeReducer } from "./shoeReducer";

const rootReducer = combineReducers({
  shoe: shoeReducer
});

export default rootReducer;

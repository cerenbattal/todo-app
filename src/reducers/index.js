import { combineReducers } from "redux";
import todos from "./todos";
import inprogresses from "./inprogresses";

export default combineReducers({
  todos,
  inprogresses,
});

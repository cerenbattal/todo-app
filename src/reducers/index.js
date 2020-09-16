import { combineReducers } from "redux";
import todos from "./todos";
import inprogresses from "./inprogresses";
import dones from "./dones";

//combine all the reducers
export default combineReducers({
  todos,
  inprogresses,
  dones,
});

import { combineReducers } from "redux";
import todos from "./todos";
import inprogresses from "./inprogresses";
import dones from "./dones";

export default combineReducers({
  todos,
  inprogresses,
  dones,
});

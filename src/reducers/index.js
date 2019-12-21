import loading from "./loading";
import todos from "./todos";
import goals from "./goals";
import { combineReducers } from "redux";

export default combineReducers({ todos, goals, loading });

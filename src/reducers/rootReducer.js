import { combineReducers } from "redux";
import redditsReducer from "./redditsReducer";

const rootReducer = combineReducers({
    redditsReducer,
})

export default rootReducer;
import { combineReducers } from "redux";
import bookReducer from "./Reducers/BookReducer";
import penReducer from "./Reducers/PenReducer";
const rootReducer=combineReducers({
    book:bookReducer,
    pen:penReducer
})
export default rootReducer
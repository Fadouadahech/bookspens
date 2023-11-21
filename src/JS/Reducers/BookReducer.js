//src/JS/Reducers/rootReducers.js
import { BUY_BOOK} from "../Constant/BookActiontype";

const initialState = {
   bookNumber : 0
}
const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BOOK:
            return {
                ...state, 
                bookNumber: state.bookNumber+parseInt(action.payload)
            }
        default:
            return state
    }
}

export default bookReducer
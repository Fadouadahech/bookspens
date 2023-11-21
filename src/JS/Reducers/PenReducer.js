//src/JS/Reducers/rootReducers.js
import { BUY_PEN} from "../Constant/PenActiontype";

const initialState = {
   penNumber : 0
}
const penReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PEN:
            return {
                ...state, 
                penNumber: state.penNumber+parseInt(action.payload)
            }
        default:
            return state
    }
}

export default penReducer
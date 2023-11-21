// src/JS/Actions/actions.js
import { BUY_BOOK } from "../Constant/BookActiontype";

export const buyBOOK = (boughtBooks) => {
    return {
        type: BUY_BOOK,
        payload: boughtBooks
    }
}
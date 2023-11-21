import { BUY_PEN } from "../Constant/PenActiontype";
export const buyPEN =(boughtPens)=> {
    return {
        type:BUY_PEN ,
        payload : boughtPens
    }
}
import { addToCarts } from "./actionTypes";
import { increaseQuantityAT } from "./actionTypes";
import { decreaseQuantityAT } from "./actionTypes";
import { clearBasketAT } from "./actionTypes";
import { clearAllAT } from "./actionTypes";

export let addToCart=(parameter,selectSize,selectColor)=>({
    type: addToCarts,
    payload: {parameter,selectSize,selectColor}
})
export let increaseQuantity=(parameter)=>({
    type: increaseQuantityAT,
    payload: parameter
})
export let decreaseQuantity=(parameter)=>({
    type: decreaseQuantityAT,
    payload: parameter
})
export let clearBasket=(parameter)=>({
    type: clearBasketAT,
    payload: parameter
})
export let clearAll=()=>({
    type: clearAllAT,
})
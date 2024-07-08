import { addToCarts, clearAllAT } from "../Action/actionTypes";
import { increaseQuantityAT } from "../Action/actionTypes";
import { decreaseQuantityAT } from "../Action/actionTypes";
import { clearBasketAT } from "../Action/actionTypes";
// import allDatas from '../../data/data_origin'
import shopping from "../../data/data_shop";

// let datas=allDatas()
let data_shop=shopping()

let product={
    products:data_shop,
    cartItems:[]
}
let rootReducer=(state=product,action)=>{
    switch (action.type) {
        case addToCarts:
          let { id, name, price, parameter,brand,desc,img,size,color, } = 
          state.products.find(product => product.parameter == action.payload.parameter)
          return { ...state, 
            cartItems: [...state.cartItems, 
              { id, name, price, parameter,brand,desc,img,
                size:action.payload.selectSize,
                color:action.payload.selectColor,
                quantity:1 }] }
        case increaseQuantityAT:
          return { ...state, cartItems: state.cartItems.map(
            item=>item.parameter==action.payload?  {...item, quantity: item.quantity+1}  :item
          ) }
        case decreaseQuantityAT:
          let testQ=state.cartItems.find(product => product.parameter == action.payload)
          if (testQ.quantity<=0){
            return { ...state, cartItems: state.cartItems.map(
              item=>item.parameter==action.payload?  {...item, quantity: 0}  :item
          ) }  }
          else {
            return { ...state, cartItems: state.cartItems.map(
              item=>item.parameter==action.payload?  {...item, quantity: item.quantity-1}  :item
          ) } }
        case clearBasketAT:
          return {...state, cartItems:state.cartItems.filter(
            item=>item.parameter!==action.payload
          )
          }
        case clearAllAT:
          return{
            ...state,cartItems:[]
          }
        default:
          return state
      }
}

export default rootReducer
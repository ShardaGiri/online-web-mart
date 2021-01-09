import React from 'react';
import Item1 from './images/1.jpg'
import Item2 from './images/11.jpg'
import Item3 from './images/12.jpg'
import { ADD_TO_CART} from '../actions/action-types/cart-actions';


const initState = {
    items: [
        {id:1,title:'Item 1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Item 2', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Item 3', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3}
        
    ],
    addedItems:[],
    total: 0

}
const  BangleItems= (state = initState,action)=>{
    if(action.type === ADD_TO_CART){
        let addedItem = state.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
           return{
              ...state,
               total: state.total + addedItem.price 
                }
      }
       else{
          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal
          }
          
      }
  }
  else{
      return state
  }
}

export default BangleItems

import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import {ADD_TO_CART, ADD_QUANTITY, SUB_QUANTITY, REMOVE_ITEM, GO_TO} from '../actions/action-types/cart-actions';

const initState = {
    items: [
        {id:1,title:'Tommy Sneeker', desc: "Shoes 1.", price:110,img:Item1},
        {id:2,title:'Adidas Ultra boost', desc: "Shoes 2.", price:80,img: Item2},
        {id:3,title:'Nike Air Jordan', desc: "Shoes 3.",price:120,img: Item3},
        {id:4,title:'New Balance', desc: "Shoes 4.", price:260,img:Item4},
    ],
    addedItems:[],
    total: 0,
    totalItem: 0,

}

const cartReducer = (state = initState,action) => {
  let addedItem = null;
  switch(action.type) {
    case ADD_TO_CART:
      addedItem = state.items.find(item => item.id === action.id);
      let existedItem = state.addedItems.find(item => action.id === item.id);
      if(existedItem) {
        addedItem.quantity += 1;
        return {
          ...state,
          total: state.total + addedItem.price,
          totalItem: state.totalItem +1
        }
      } else {
        addedItem.quantity = 1;
        let newTotal = state.total + addedItem.price

        return {
          ...state,
          addedItems : [...state.addedItems, addedItem],
          total: newTotal,
          totalItem: state.totalItem + 1
        }
      }
      break;
    case ADD_QUANTITY:
      console.log("added Quantity ");
      addedItem = state.items.find(item=> item.id === action.id);
      addedItem.quantity += 1;
      let newTotal = state.total+addedItem.price
      return {
        ...state,
        total: newTotal
      }
      break;
    case SUB_QUANTITY:
      addedItem = state.items.find(item => item.id === action.id);
      if(addedItem.quantity === 1) {
        return {
          ...state,
          addedItems: state.addedItems.filter(item => item.id !== action.id),
          total: state.total - addedItem.price
        }
      } else {
        addedItem.quantity -= 1;
        return {
          ...state,
          total : state.total - addedItem.price
        }
      }
      break;
    case REMOVE_ITEM:
      let itemToRemove = state.addedItems.find(item => item.id === action.id);
      return {
        ...state,
        addedItems: state.addedItems.filter(item => item.id !== action.id),
        total: state.total -(itemToRemove.price * itemToRemove.quantity),
      }
      break;
    case GO_TO:
      return {
        ...state,
        item:state.items.find(item => item.id === action.id)
      }
    default:
      return state;
      break;
  }
}


export default cartReducer;

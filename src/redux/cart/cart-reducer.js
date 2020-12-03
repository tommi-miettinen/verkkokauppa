import {
  addItem,
  removeItem,
  setQuantity,
  toggleCart,
  hideCart,
} from "./cart-reducer-utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

console.log(addItem);

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART":
      return toggleCart(state, action);
    case "HIDE_CART":
      return hideCart(state, action);
    case "ADD_ITEM":
      return addItem(state, action);
    case "REMOVE_ITEM":
      return removeItem(state, action);
    case "SET_QUANTITY":
      return setQuantity(state, action);
    default:
      return state;
  }
};

export default cartReducer;

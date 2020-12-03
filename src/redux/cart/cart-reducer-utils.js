export const addItem = (state, action) => {
  const newItem = action.payload;
  if (!state.cartItems.find((item) => newItem.id === item.id)) {
    return {
      ...state,
      cartItems: [...state.cartItems, { ...newItem, quantity: 1 }],
    };
  }
  return {
    ...state,
    cartItems: state.cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: +item.quantity + 1 } : item
    ),
  };
};

export const removeItem = (state, action) => {
  return {
    ...state,
    cartItems: state.cartItems
      .map((item) => {
        if (item.id === action.payload.id && +item.quantity > 0) {
          return { ...item, quantity: +item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => +item.quantity > 0),
  };
};

export const setQuantity = (state, action) => {
  if (action.payload.quantity <= 0) {
    return {
      ...state,
      cartItems: state.cartItems.filter(
        (item) => item.id !== action.payload.id
      ),
    };
  }
  return {
    ...state,
    cartItems: state.cartItems.map((item) =>
      item.id === action.payload.id
        ? { ...item, quantity: action.payload.quantity }
        : item
    ),
  };
};

export const toggleCart = (state, action) => {
  return {
    ...state,
    hidden: !state.hidden,
  };
};

export const hideCart = (state, action) => {
  return {
    ...state,
    hidden: true,
  };
};

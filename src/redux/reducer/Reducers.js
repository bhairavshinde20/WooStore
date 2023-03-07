import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(item => item.id == action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const removeFromCart = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = removeFromCart;
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id == action.payload.id);
      itemInCart.quantity++;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.find(item => item.id == action.payload.id);
      if (itemInCart.quantity == 1) {
        const removeFromCart = state.cart.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = removeFromCart;
      } else {
        itemInCart.quantity--;
      }
    },

  //  Totalitem : item =>{
  //   let quantity = 0;
  //       let totalPrice = 0;
  //       item.forEach((item) => {
  //         quantity += item.quantity;
  //         totalPrice += item.price * item.quantity;
  //       });
  //       return [totalPrice];
  // }
  },
});

export const {
  addToCart,
  FetchProduct,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  Totalitem
} = cartSlice.actions;

export default cartSlice.reducer;

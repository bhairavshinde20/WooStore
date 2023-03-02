import { createSlice } from '@reduxjs/toolkit';

export const favSlice = createSlice({
  name: 'fav',
  initialState: {
    fav: [],
  },
  reducers: {
    addToFav: (state, action) => {
      const itemInCart = state.fav.find(item => item.id == action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.fav.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromFav: (state, action) => {
      const removeFromFav = state.fav.filter(
        item => item.id !== action.payload.id,
      );
      state.fav = removeFromFav;
    },
  },
});

export const {
  addToFav,
  removeFromFav

} = favSlice.actions;

export default favSlice.reducer;

const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      const updatedCartList = state.cartItems.concat(action.payload);
      const total = state.total + action.payload.price;
      return { ...state, total, cartItems: updatedCartList };
    },
    remove(state, action) {
      const updatedCartList = state.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );
      const total = state.total - action.payload.price;
      return { ...state, total, cartItems: updatedCartList };
    },
  },
});

export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

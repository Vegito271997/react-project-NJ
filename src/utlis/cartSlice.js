import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   // create slice takes a config in form of obj

//   name: "cart", // name of slice

//   initialState: {
//     //takes a config in form of obj
//     // initial state of slice

//     items: ["pizza", "burger"], // cart items in the initial state
//   },
//   reducers: {
//     // object which has different types of action in it

//     addItem: (state, action) => {
//       // addItem-> action, "() => {}" --> reducer, state -> state of slice

//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       state.items.pop();
//     },
//     clearItem: (state, action) => {
//       state.items.length = 0;
//     },
//   },
// });

// export const { addItem, removeItem, clearItem } = cartSlice.actions;

// export default cartSlice.reducers;

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearItems: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;

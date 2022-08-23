import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    //Actions
    addToOrder: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeFromOrder: (state, action) => {
      const index = state.items.findIndex(
        (orderItem) => orderItem.id === action.payload.id
      );
      let newOrder = [...state.items];
      if (index >= 0) {
        //the item exists in order; remove it
        newOrder.splice(index, 1); //(position, number of item to delete)
      } else {
        console.warn(
          `cant remove item(id: ${action.payload.id}) as its not in order`
        );
      }
      state.items = newOrder;
    },

    //some other actions....
  },
});

export const { addToOrder, removeFromOrder } = orderSlice.actions;

//Selectors - this is how we pull information from the global store slice
export const selectItems = (state) => state.order.items;
export const selectTotal = (state) =>
  state.order.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
export default orderSlice.reducer;

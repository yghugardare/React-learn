import { createSlice, nanoid } from "@reduxjs/toolkit";

// initial state
const initialState = {
  watchList: [
    {
      id: 1,
      name: "Apple Watch Series 7",
      price: 929.0,
      imageUrl: "someUrl",
    },
  ],
};

export const crudSlice = createSlice({
  // name of slice
  name: "crud",
  // state that will be passed to reducer function
  initialState,
  // reducers
  reducers: {
    addWatchToWatchlist: (state, action) => {
      const { name, price, imageUrl } = action.payload;
      const id = nanoid();
      
      const doesExist = state.watchList.find((watch) => watch.id === id);
      if (!doesExist) {
        state.watchList.push({ id, name, price, imageUrl });
      }
    },
    removeFromWatchlist: (state, action) => {
      const inpId = action.payload;
      // add all elements in watchList except that particular element
      state.watchList = state.watchList.filter((watch) => watch.id != inpId);
    },
    updateInWatchlist: (state, action) => {
      const { id, newDataObj } = action.payload;
      const watchListIndex = state.watchList.findIndex(
        (watch) => watch.id === id
      );
      if (watchListIndex !== -1) {
        state.watchList[watchListIndex] = {
          ...state.watchList[watchListIndex],
          ...newDataObj,
        };
      }
    },

  },
});
export const {addWatchToWatchlist,removeFromWatchlist,updateInWatchlist} = crudSlice.actions;

// export reducers from slice
export default crudSlice.reducer;
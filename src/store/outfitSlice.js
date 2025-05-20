import { createSlice } from "@reduxjs/toolkit";

const outfitSlice = createSlice({
  name: "outfit",
  initialState: [],
  reducers: {
    addToOutfit(state, action) {
      const newItem = action.payload;
      const alreadyExists = state.some((item) => item.id === newItem.id);
      if (!alreadyExists) {
        state.push(newItem);
      }
    },
    removeFromOutfit(state, action) {
      const removedItemId = action.payload;
      return state.filter((item) => item.id !== removedItemId);
    },
    removeAllFromOutfit(state, action) {
      return [];
    },
  },
});

export const { addToOutfit, removeFromOutfit, removeAllFromOutfit } =
  outfitSlice.actions;
export default outfitSlice.reducer;

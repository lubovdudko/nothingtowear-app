import { createSlice } from "@reduxjs/toolkit";

const savedOutfitsSlice = createSlice({
  name: "savedOutfits",
  initialState: [],
  reducers: {
    addToSavedOutfits(state, action) {
      const id = Date.now().toString() + Math.floor(Math.random() * 1000);
      const date = new Date().toISOString();
      const { outfitItems, name } = action.payload;
      const newOutfit = {
        id,
        name,
        date,
        items: outfitItems.map((item) => ({ ...item })),
      };
      state.push(newOutfit);
    },
    removeFromSavedOutfits(state, action) {
      const removedOutfitId = action.payload;
      return state.filter((item) => item.id !== removedOutfitId);
    },
  },
});

export const { addToSavedOutfits, removeFromSavedOutfits } =
  savedOutfitsSlice.actions;
export default savedOutfitsSlice.reducer;

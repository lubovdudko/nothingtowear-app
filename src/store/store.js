import { configureStore } from "@reduxjs/toolkit";
import outfitReducer from "./outfitSlice";
import savedOutfitsReducer from "./savedOutfitsSlice";

export const store = configureStore({
  reducer: {
    outfit: outfitReducer,
    savedOutfits: savedOutfitsReducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { MealSlice } from "./slices/mealSlice";

export const dataStore = configureStore({
    reducer: {
        mealSlice: MealSlice.reducer,
    },
});

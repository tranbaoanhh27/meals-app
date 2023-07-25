import { createSlice } from "@reduxjs/toolkit";
import { CATEGORIES, MEALS } from "../../data/dummy-data";

export const MealSlice = createSlice({
    name: "Meals",
    initialState: {
        mealsString: JSON.stringify(MEALS),
        categoriesString: JSON.stringify(CATEGORIES),
    },
    reducers: {
        markMealAsFavorite(state, action) {
            const mealId = action.payload.mealId;
            if (!mealId) return;
            const meals = JSON.parse(state.mealsString);
            const mealIndex = meals.findIndex((item) => item.id === mealId);
            if (mealIndex === -1) return;
            meals[mealIndex].isFavorite = true;
            state.mealsString = JSON.stringify(meals);
        },
        markMealAsNotFavorite(state, action) {
            const mealId = action.payload.mealId;
            if (!mealId) return;
            const meals = JSON.parse(state.mealsString);
            const mealIndex = meals.findIndex((item) => item.id === mealId);
            if (mealIndex === -1) return;
            meals[mealIndex].isFavorite = false;
            state.mealsString = JSON.stringify(meals);
        },
    },
});

export const MealSliceActions = MealSlice.actions;

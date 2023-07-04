import {Mutation} from "vuex";

export const setSearchedMeals:Mutation<any> = (state, meals) => {
    state.searchedMeals = meals;
}

export const setMealsByLetter:Mutation<any> = (state, meals) => {
    state.mealsByLetter = meals;
}

export const setMealsByIngredient:Mutation<any> = (state, meals) => {
    state.mealsByIngredient = meals;
}
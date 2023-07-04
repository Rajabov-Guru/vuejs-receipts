import {Action} from "vuex";
import axiosClient from "../main/axiosClient";
import {getIngredients, getMeasures} from "../main/lib";

export const searchMeals:Action<any, any> = async ({commit}, keyWord:string) => {
    const {data} = await axiosClient.get(`search.php?s=${keyWord}`);
    const meals = [];
    for(let i = 0; i < data.meals.length; i++ ){
        const json = data.meals[i];
        const meal:Meal = {
            ...json,
            ingredients: getIngredients(json),
            measures: getMeasures(json)
        } as Meal;
        meals.push(meal);
    }
    commit('setSearchedMeals', meals);
}

export const searchMealsByLetter:Action<any, any> = async ({commit}, letter:string) => {
    const {data} = await axiosClient.get(`search.php?f=${letter}`);
    const meals = [];
    for(let i = 0; i < data.meals.length; i++ ){
        const json = data.meals[i];
        const meal:Meal = {
            ...json,
            ingredients: getIngredients(json),
            measures: getMeasures(json)
        } as Meal;
        meals.push(meal);
    }
    commit('setMealsByLetter', meals);
}

export const searchMealsByIngredient:Action<any, any> = async ({commit}, ingredient:string) => {
    const {data} = await axiosClient.get(`filter.php?i=${ingredient}`);
    const meals = [];
    for(let i = 0; i < data.meals.length; i++ ){
        const json = data.meals[i];
        const meal:Meal = {
            ...json,
            ingredients: getIngredients(json),
            measures: getMeasures(json)
        } as Meal;
        meals.push(meal);
    }
    commit('setMealsByIngredient', meals);
}
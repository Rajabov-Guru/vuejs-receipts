import {Meal} from "../main/model";

interface StateType{
    searchedMeals: Meal[];
    mealsByLetter: Meal[];
    mealsByIngredient: Meal[];
}

const state:StateType = {
    searchedMeals: [],
    mealsByLetter:[],
    mealsByIngredient:[]
};

export default state;
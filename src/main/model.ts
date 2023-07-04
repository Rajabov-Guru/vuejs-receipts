export interface Ingredient{
    idIngredient:string;
    strIngredient: string;
    strDescription?: string;
    strType?:string;
}

export interface Meal{
    idMeal:string,
    strMeal:string,
    strDrinkAlternate:string | null,
    strCategory:string,
    strArea:string,
    strInstructions: string,
    strMealThumb:string,
    strTags:string,
    strYoutube:string,
    strSource:string | null,
    strImageSource:string | null,
    strCreativeCommonsConfirmed:string | null,
    dateModified:string | null,
    ingredients: string[],
    measures: string[];
}
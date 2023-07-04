import {createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from "../views/Home.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByIngredients from "../views/MealsByIngredients.vue";
import MealsByName from "../views/MealsByName.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import MealDetails from "../views/MealDetails.vue";
import Ingredients from "../views/Ingredients.vue";

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: DefaultLayout,
        children:[
            {
                path:'/',
                name: 'home',
                component: Home
            },
            {
                path:'/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path:'/ingredients',
                name: 'ingredients',
                component: Ingredients
            },
            {
                path:'/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealsByIngredients
            },
            {
                path:'/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path:'/meal/:id',
                name: 'mealDetails',
                component: MealDetails
            }
        ]
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
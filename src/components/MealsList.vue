<template>
  <div v-if="meals.length" class="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5 p-8">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal"/>
  </div>
  <div v-else class="mt-4 flex justify-center text-gray-600 p-8">
    There's no meals :(
  </div>
</template>

<script setup lang="ts">
import {Meal} from "../main/model";
import MealItem from "./MealItem.vue";

const {meals} = defineProps<{
  meals:Meal[]
}>();
</script>

<style scoped>

</style>
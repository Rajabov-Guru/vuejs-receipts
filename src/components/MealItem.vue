<template>
  <div class="bg-white shadow rounded-xl hover:scale-105 transition-all">
    <router-link :to="{name:'mealDetails', params: {id: meal.idMeal}}">
      <img :src="meal.strMealThumb"
           :alt="meal.strMeal"
           class="rounded-t-xl h-48 object-cover w-full"/>
    </router-link>
    <div class="p-3">
      <h3  class="font-bold">{{ meal.strMeal }}</h3>
      <p class="mb-4">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :url="meal.strYoutube">YouTube</YouTubeButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import YouTubeButton from "./YouTubeButton.vue";
  import {Meal} from "../main/model";

  const {meal} = defineProps<{
    meal: Meal
  }>();


</script>

<style scoped>

</style>
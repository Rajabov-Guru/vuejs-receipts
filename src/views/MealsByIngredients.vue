<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals for {{ route.params.ingredient }}</h1>
  </div>
  <MealsList :meals="meals"/>
</template>

<script setup lang="ts">
  import {computed, onMounted} from "vue";
  import store from "../store";
  import {useRoute} from "vue-router";
  import MealsList from "../components/MealsList.vue";

  const route = useRoute();
  const meals = computed(() => store.state.mealsByIngredient);
  function fetchMeals(){
    const ing = route.params.ingredient;
    store.dispatch('searchMealsByIngredient', ing);
  }

  onMounted(fetchMeals)

</script>

<style scoped>

</style>
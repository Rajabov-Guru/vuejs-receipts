<template>
  <div v-if="meal" class="p-3 max-w-[800px] mx-auto">
    <h1 class="text-4xl font-bold mb-5 text-orange-500">{{meal.strMeal}}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-full"/>
    <div class="grid grid-cols-1 md:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category:</strong> {{meal.strCategory}}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{meal.strArea}}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> {{meal.strTags}}
      </div>
    </div>
    <div class="my-3">
      {{meal.strInstructions}}
    </div>
    <div class="my-8 grid grid-cols-2">
      <div class="mx-auto">
        <h2 class="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul>
          <li v-for="(ing, ind) of meal.ingredients">{{ind+1}}. {{ing}}</li>
        </ul>
      </div>
      <div class="mx-auto">
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <li v-for="(measure, ind) of meal.measures">{{ind+1}}. {{measure}}</li>
        </ul>
      </div>
    </div>
    <div class="my-4">
      <YouTubeButton :url="meal.strYoutube">YouTube</YouTubeButton>
      <a :href="meal.strSource"
         target="_blank"
         class="ml-3 px-3 py-2 rounded border-2 border-indigo-600 bg-indigo-500 hover:bg-indigo-600 text-white transition-colors"
      >
        <slot>
          Source
        </slot>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {onMounted, ref} from "vue";
  import {useRoute} from "vue-router";
  import axiosClient from "../main/axiosClient";
  import {getIngredients, getMeasures} from "../main/lib";
  import YouTubeButton from "../components/YouTubeButton.vue";
  import {Meal} from "../main/model";
  const route = useRoute();
  const meal = ref<Meal | null>(null);

  onMounted(async () => {
    const id = route.params.id;
    const {data} = await axiosClient.get(`lookup.php?i=${id}`);
    const json = data.meals[0];
    meal.value = {
      ...json,
      ingredients: getIngredients(json),
      measures: getMeasures(json)
    } || null;
  })
</script>

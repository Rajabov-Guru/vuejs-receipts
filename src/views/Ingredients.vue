<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>
  <div class="px-8">
    <input
        type="text"
        v-model="keyWord"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
        placeholder="Search for Ingredients"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <router-link
          v-for="ing of computedIngs"
          :key="ing.idIngredient"
          :to="{name:'byIngredient', params:{ingredient:ing.strIngredient}}"
          class="block bg-white rounded p-3 mb-3 shadow">
      <h3 class="text-2xl font-bold">{{ing.strIngredient}}</h3>
      </router-link>
    </div>
  </div>
</template>



<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import axiosClient from "../main/axiosClient";
import {Ingredient} from "../main/model";

const keyWord = ref('');
const ingredients = ref<Ingredient[]>([]);
const computedIngs = computed(() => {
  if(!keyWord.value){
    return ingredients.value;
  }
  return ingredients.value.filter(i =>
      i.strIngredient?.toLowerCase().includes(keyWord.value.toLowerCase()));
});
async function fetchMeals(){
  const {data} = await axiosClient.get(`list.php?i=list`);
  ingredients.value = data.meals;
}
onMounted(fetchMeals);
</script>

<style scoped>

</style>
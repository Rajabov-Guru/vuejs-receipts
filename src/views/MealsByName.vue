<template>
  <div class="p-8 pb-0">
    <input
        @change="searchMeals"
        v-model="keyWord"
        type="text"
        class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
        placeholder="Search for Meals">
  </div>
  <MealsList :meals="searchedMeals"/>
</template>

<script setup lang="ts">
  import {computed, onMounted, ref} from "vue";
  import store from "../store";
  import {useRoute} from "vue-router";
  import MealsList from "../components/MealsList.vue";
  import {Meal} from "../main/model";

  const route = useRoute();
  const keyWord = ref('');
  const searchedMeals = computed<Meal[]>(() => store.state.searchedMeals);

  function searchMeals(){
    if(keyWord.value){
      store.dispatch('searchMeals', keyWord.value);
    }
    else store.commit("setSearchedMeals",[]);
  }

  onMounted(() => {
    keyWord.value = route.params.name as string;
    if(keyWord.value){
      searchMeals();
    }
  })
</script>

<style scoped>

</style>
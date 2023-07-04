<template>
  <div class="flex flex-col min-h-full">
    <Navbar/>
    <main class="flex-[1_1_auto] bg-gray-100">
      <div class="max-w-[1200px] mx-auto">
        <router-view/>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>
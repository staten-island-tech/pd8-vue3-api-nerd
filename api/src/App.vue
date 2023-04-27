<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomePage from './views/HomePage.vue'
import RacePage from './views/RacePage.vue'

let currentpage = "home"
</script>

<template>
  <header>
    <div v-if="currentpage === 'home'">
      <HomePage/>
    </div>
    <div v-if="currentpage === 'race'">
      <RacePage/>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>

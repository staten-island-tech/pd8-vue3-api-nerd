<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink class="btn" to="/home">Home</RouterLink>
      <RouterLink class="btn" to="/race">Race Statistic</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.btn {
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
}
</style>

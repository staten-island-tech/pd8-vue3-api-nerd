<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {onMounted} from 'vue'

async function getapi(){
  let res = import('https://data.cityofnewyork.us/resource/kwvk-z7i9.json')
  let data = await res.json()
  console.log(data)
}
onMounted(() => {
  getapi()
})

</script>

<template>
  <header>
      <nav>
        <RouterLink class="btn" to="/home">Home</RouterLink>
        <RouterLink class="btn" to="/race">About</RouterLink>
      </nav>
  
  </header>

  <RouterView />
</template>

<style scoped>
.btn{
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
}
</style>

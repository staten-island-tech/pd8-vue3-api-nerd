<template>
  <h1>⚠️💀Crime in New York💀⚠️</h1>

  <img
    src="https://redirect.field59.com/video/thumb/115f35c95dabeb5b3224024b0d7cf2a801896541/w1024/h575"
    alt=""
  />
</template>
<script setup>
import { ref } from 'vue'
import { onMounted } from 'vue'

let apidata = ref('')

async function getapi() {
  let res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
  let data = await res.json()
  data.forEach((element) => {
    apidata.value = element
  })
}
onMounted(() => {
  getapi()
})
console.log(apidata)
</script>

<style>
h1 {
  align-self: center;
}
</style>

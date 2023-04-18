<template>
<h1>hello</h1>
</template>
<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

let allrace = []

async function getapi(){
    let res = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
    let data = await res.json()
    console.log(data)
    allrace.push(data[0].perp_race)
let i = 1
if(data[i].perp_race != data[i-0]){
    allrace.push(data)
}
}
onMounted(() =>{    
    getapi()
    console.log(allrace)
    console.log("hfjdcndncdc")
})
</script>
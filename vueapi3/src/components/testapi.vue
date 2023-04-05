<template>
<h1>hello</h1>
</template>
<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

let apidata = ref('')

async function getapi(){
    let res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
    let data = await res.json()
    data.forEach(element => {
        apidata.value = element
    });

}
onMounted(() =>{    
    getapi()
})
console.log(apidata)
</script>
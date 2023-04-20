<template>
</template>
<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

let allrace = []
let black = 0
let white = 0
let asianPacificianIslander = 0
let blackhispanic = 0
let whitehispanic = 0
let americanindianAlaskanNative = 0
let unknown = 0



async function getapi(){
    let res = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
    let data = await res.json()

    allrace.push(data[0].perp_race)
    let i = 1
    while(i <= 1000){
        if(allrace.includes(data[i].perp_race)){
            i++
        }else{
            allrace.push(data[i].perp_race)
            i++
        }
    }
}

onMounted(() =>{    
    getapi()
    console.log(allrace)
})
</script>
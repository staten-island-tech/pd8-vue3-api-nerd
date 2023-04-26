import { reactive } from 'vue'

export const api = 
    async function(){
    let res = await fetch("https://data.cityofnewyork.us/resource/uip8-fykc.json")
    data = await res.json()
}
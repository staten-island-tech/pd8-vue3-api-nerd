<script setup>
import { ref, onMounted } from 'vue'

import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

let apidata = ref('')

async function getdata() {
  let res = await fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
  let data = await res.json()
  console.log(data)
  apidata.value = data
}

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['Brooklyn', 'Staten Island', 'Manhattan', 'Queen', 'Bronx'],
  datasets: [{ data: [40, 180, 12, 200, 1] }]
}

const chartOptions = {
  responsive: true
}

onMounted(() => {
  getdata()
  console.log(apidata)
})
</script>

<template>
  <div>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<style scoped></style>

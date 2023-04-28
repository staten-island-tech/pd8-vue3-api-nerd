<script>
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

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: {
    Bar
  },
  data() {
    return {
      chartData: {
        labels: ['Brooklyn', 'Staten Island', 'Manhattan', 'Queen', 'Bronx'],
        datasets: [{ data: [40, 20, 12, 200, 1] }]
      },
      chartOptions: {
        responsive: true
      },
      BK: 0,
      SI: 0,
      MH: 0,
      QN: 0,
      BX: 0
    }
  },
  methods: {},
  beforeMount() {}
}
</script>

<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<style scoped></style>

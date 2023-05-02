<template>
  <div class="page">
    <h1>Arrests by Gender</h1>
    <div class="chart">
      <canvas id="myChart" width="200" height="200"></canvas>
    </div>
  </div>
</template>

<style scoped>
.page {
  text-align: center;
}
.chart {
  max-width: 700px;
  max-height: 700px;
}
</style>

<script>
const APIURL = 'https://data.cityofnewyork.us/resource/uip8-fykc.json'

async function getData() {
  const response = await fetch(APIURL)
  const Info = await response.json()
  let females = 0
  Info.forEach((person) => {
    if (person.perp_sex.includes('F')) {
      females++
    }
  })
  let males = 0
  Info.forEach((person) => {
    if (person.perp_sex.includes('M')) {
      males++
    }
  })
  return { males, females }
}

import Chart from 'chart.js/auto'

export default {
  mounted() {
    getData().then((data) => {
      console.log(data.males)
      console.log(data.females)
      const myChart = new Chart(document.getElementById('myChart'), {
        type: 'bar',
        data: {
          labels: ['Male', 'Female'],
          datasets: [
            {
              label: 'Arrest by Gender',
              data: [data.males, data.females],
              backgroundColor: ['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.7)'],
              borderColor: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'],
              borderWidth: 3
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right'
            }
          }
        }
      })
    })
  }
}
</script>

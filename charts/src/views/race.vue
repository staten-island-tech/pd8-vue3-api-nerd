<template>
  <h1>Arrests by Race</h1>
  <div class="chart">
    <canvas id="myChart"></canvas>
  </div>
</template>
<style scoped>
h1 {
  text-align: center;
}
.chart {
  max-width: 700px;
  max-height: 700px;
}
</style>

<script>
import Chart from 'chart.js/auto'

const APIURL = 'https://data.cityofnewyork.us/resource/uip8-fykc.json'

async function getrace() {
  const response = await fetch(APIURL)
  const data = await response.json()
  let currentrace = ['BLACK']
  let alreadyhave = []
  for (let i = 0; i < data.length; i++) {
    if (currentrace.includes(data[i].perp_race)) {
      alreadyhave.push(data[i].perp_race)
    } else {
      currentrace.push(data[i].perp_race)
    }
  }
  console.log(currentrace)
}
getrace()
async function getData() {
  const response = await fetch(APIURL)
  const data = await response.json()
  let Black = 0
  let White = 0
  let Asian = 0
  let BlackHispanic = 0
  let WhiteHispanic = 0
  let Unknown = 0
  data.forEach((person) => {
    if (person.perp_race.includes('BLACK')) {
      Black++
    } else if (person.perp_race.includes('WHITE')) {
      White++
    } else if (person.perp_race.includes('ASIAN')) {
      Asian++
    } else if (person.perp_race.includes('BLACK HISPANIC')) {
      BlackHispanic++
    } else if (person.perp_race.includes('WHITE HISPANIC')) {
      WhiteHispanic++
    } else if (person.perp_race.includes('UNKNOWN')) {
      Unknown++
    }
  })
  return { Black, White, Asian, BlackHispanic, WhiteHispanic, Unknown }
}

export default {
  mounted() {
    getData().then((data) => {
      const myChart = new Chart(document.getElementById('myChart'), {
        type: 'pie',
        data: {
          labels: ['Black', 'White', 'Asian', 'Black Hispanic', 'White Hispanic', 'Unknown'],
          datasets: [
            {
              label: 'Arrests by Race',
              data: [
                data.Black,
                data.White,
                data.Asian,
                data.BlackHispanic,
                data.WhiteHispanic,
                data.Unknown
              ],
              backgroundColor: [
                'rgba(0, 0, 0, 0.7)',
                'rgba(255, 255, 255, 0.7)',
                'rgba(255, 255, 0, 0.7)',
                'rgba(255, 130, 100)',
                'rgba(35, 130, 100)',
                'rgba(135, 240, 100)'
              ],
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

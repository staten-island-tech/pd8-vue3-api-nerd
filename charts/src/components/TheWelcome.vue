<!-- 
<template>
  <canvas id="myChart" width="800" height="800"></canvas>
</template>

<script>
import Chart from 'chart.js/auto';

const APIURL = "https://data.cityofnewyork.us/resource/uip8-fykc.json";

async function getData() {
  const response = await fetch(APIURL);
  const data = await response.json();
  let Black = 0;
  let White = 0;
 
  let Asian = 0;
  data.forEach((person) => {
    if (person.perp_race.includes("BLACK")) {
      Black++;
    } else if (person.perp_race.includes("WHITE")) {
      White++;

    } else if (person.perp_race.includes("ASIAN")) {
      Asian++;
    }
  });
  return { Black, White, Asian };
}

export default {
  mounted() {
    getData().then(data => {
      const myChart = new Chart(document.getElementById('myChart'), {
        type: 'pie',
        data: {
          labels: ['Black', 'White', 'Asian'],
          datasets: [{
            label: 'Arrests by race',
            data: [data.Black, data.White,data.Asian],
            backgroundColor: [
              'rgba(0, 0, 0, 0.7)',
              'rgba(255, 255, 255, 0.7)',
              'rgba(255, 0, 0, 0.7)',
    
            ],
            borderColor: [
              'rgba(0, 0, 0, 1)',
              'rgba(255, 255, 255, 1)',
              'rgba(255, 0, 0, 1)',
         
            ],
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'right'
            }
          }
        }
      });
    });
  }
};
</script> -->
<script></script>
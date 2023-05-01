<template>
  Arrests by Gender
  <canvas id="myChart" width="200" height="200"></canvas>

</template>

<script>

  const APIURL = "https://data.cityofnewyork.us/resource/uip8-fykc.json";

  async function CheckF() {
    const response = await fetch(APIURL);
    const Info = await response.json();
    let females = 0;
    Info.forEach((person) => {
      if (person.perp_sex.includes("F")) {
        females++;
      }
    });
    console.log(females)
    return females;
  }

  async function CheckM() {
    const response = await fetch(APIURL);
    const Info = await response.json();
    let males = 0;
    Info.forEach((person) => {
      if (person.perp_sex.includes("M")) {
        males++;
      }});
      console.log(males)
      return males;
  }



  CheckF()

  CheckM()

  async function getData() {
    const males = await CheckM();
    const females = await CheckF();
    return [males, females];
  }



  import Chart from 'chart.js/auto';


  async function createChart() {
    const [males, females] = await getData();
    const ctx = document.getElementById('myChart').getContext('2d');
    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Males', 'Females'],
        datasets: [{
          label: 'Arrest Datas for Genders',
          data: [males, females],
          backgroundColor: ['blue',]
        }]
      },
      options: {
      maintainAspectRatio: true,
      aspectRatio: 1,
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true

            }
          }]
        }
      }
    });

  }

  createChart()


</script>
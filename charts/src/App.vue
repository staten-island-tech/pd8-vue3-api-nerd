<script>
import { RouterLink, RouterView } from 'vue-router'
import Home from './views/Home.vue'
import GenderPage from './views/gender.vue'
import RacePage from './views/race.vue'
// import ChartRaces from './components/ChartRaces.vue'
// import TheWelcome from './components/TheWelcome.vue'

export default {
  data() {
    return {
      currentpage: 'race'
    }
  },
  methods: {
    racepage() {
      this.currentpage = 'race'
    },
    genderpage() {
      this.currentpage = 'gender'
    }
  },
  components: {
    GenderPage,
    RacePage
  }
}
</script>

<template>
  <header>
    <nav class="navigate">
      <RouterLink to="/race" class="btn">Race</RouterLink>
      <RouterLink to="/gender" class="btn">Gender</RouterLink>
    </nav>
    <div>
      <h1 class="head">New York Crime Statistic</h1>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.head {
  text-align: center;
  margin-top: 50px;
  font-size: 50px;
}
.btn {
  font-size: 40px;
  margin-left: 100px;
  margin-right: 100px;
}

.navigate {
  text-align: center;
}
</style>

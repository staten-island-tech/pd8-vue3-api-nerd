<script>
import { RouterLink, RouterView } from 'vue-router'
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
      <RouterLink to="/race" class="btn">Races</RouterLink>
      <RouterLink to="/gender" class="btn">Gender</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
.btn {
  margin-left: 10px;
  margin-right: 10px;
}

.navigate {
  text-align: center;
}
</style>

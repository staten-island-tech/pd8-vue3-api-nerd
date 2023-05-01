<script>
import { RouterLink, RouterView } from 'vue-router'
// import ChartRaces from './components/ChartRaces.vue'
// import TheWelcome from './components/TheWelcome.vue'

export default{
  data(){
    return{
      currentpage: 'race'
    }
  },
  methods: {
    racepage: function(){
      this.currentpage = 'race'
    }
  }
}

</script>

<template>
  <header>

    <div>
      <button @click="racepage">Race</button>
      <button @click="genderpage">Gender</button>
    </div>

    <div v-if="currentpage = 'race'">
<h1>this is race page</h1>
    </div>
    <div v-if="currentpage === 'gender'">
      <h1>this is gender page</h1>
    </div>
  
      <nav>
        <RouterLink to="/race">Races</RouterLink>
        <RouterLink to="/gender">Gender</RouterLink>
      </nav>
    
  </header>

  <RouterView />
</template>

<style scoped>

</style>

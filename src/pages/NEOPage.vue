<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div v-if="!neo" @click="search" class="home-card p-5 bg-white rounded elevation-3">
      <h1 class="my-5 bg-dark text-white p-3 rounded">
        Near Earth Objects
      </h1>
    </div>

    <div v-if="neo">
<div class="container-fluid">
<div class="row justify-content-between">
<div class="card elevation-5 col-md-3 border border-1 border-dark" v-for="n in neo" :key="n">



      <div class="m-2"> 
     <p class="name card-title"> <b> Name: {{n.name}} </b> </p>
     <p :class="{
        'btn-danger': n.hazard,
        'btn-success': !n.hazard,
      }"> Hazard: {{n.hazard}} </p>
     <p> Luminosity: {{n.magnitude}} </p>
      </div>
</div>
</div>
</div>



    </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { neoService } from '../services/NeoService'
import { AppState } from '../AppState'

export default {
  name: 'NEO',

  setup(){
    return {
      neo: computed(()=> AppState.neo),

      async search(){
        try {
          await neoService.findNeo()
        } catch (error) {
          logger.error(error)
        }
      }

    }
  }
}
</script>

<style scoped lang="scss">
p{
  max-width: 75vw;
  font-size: 1.25em;
}

.name{
  max-width: 75vw;
  font-size: 1.25em;
  text-decoration: underline;
}


.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>

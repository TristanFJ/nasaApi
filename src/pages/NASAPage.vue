<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div v-if="!apod" @click="search" class="home-card p-5 bg-white rounded elevation-3">
      <h1 class="my-5 bg-dark text-white p-3 rounded text-center">
        NASA
      </h1>
    </div>

    <div v-if="apod">
      <h1>{{apod.title}}</h1>
      <img style="max-height: 35vh" class="m-3" :src="apod.imgUrl" alt="">
      <p>{{apod.description}}</p>
      <h2>{{apod.date}}</h2>
      
      
      
      </div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { apodService } from '../services/ApodService'
import { AppState } from '../AppState'

export default {
  name: 'NASA',

  setup(){
    return {
      apod: computed(()=> AppState.apod),

      async search(){
        try {
          await apodService.findApod()
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

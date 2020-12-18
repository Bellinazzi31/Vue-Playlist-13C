<template>
  <div id="app">
    <music-file></music-file>
    
  </div>
</template>

<script>
import MusicFile from './components/MusicFile.vue'

export default {
  name: 'App',
  components: {
    MusicFile
    
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>

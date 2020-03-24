<template>
  <div id="app">
    <!-- <img src="./assets/emoji_kids_01.png" alt=""> -->
    <Counter></Counter>
    <router-view />
  </div>
</template>

<script>
import Counter from './components/Counter'

export default {
  name: 'App',
  components: {
    Counter
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
